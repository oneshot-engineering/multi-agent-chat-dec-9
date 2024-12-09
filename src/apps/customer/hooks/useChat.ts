import { useState, useCallback } from 'react';
import { Message, User } from '../../../types';
import { sendMessage } from '../services/chatService';

interface UseChatProps {
  currentUser: User;
  recipient: User;
}

export function useChat({ currentUser, recipient }: UseChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedOutput, setSelectedOutput] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [processingMessage, setProcessingMessage] = useState(false);

  const handleSendMessage = useCallback(async (content: string) => {
    if (processingMessage) return;

    try {
      setProcessingMessage(true);
      
      // Create and add user message
      const userMessage: Message = {
        id: crypto.randomUUID(),
        content: { type: 'text', data: content },
        sender: currentUser,
        timestamp: new Date(),
        isRead: true,
        type: 'message'
      };
      
      setMessages(prev => [...prev, userMessage]);
      setIsTyping(true);
      setError(null);

      // Send message to service and get response
      const response = await sendMessage(content, currentUser, recipient);
      
      setMessages(prev => [...prev, response.message]);
      setSelectedOutput(response.output);
    } catch (error) {
      console.error('Failed to send message:', error);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsTyping(false);
      setProcessingMessage(false);
    }
  }, [currentUser, recipient, processingMessage]);

  const initializeChat = useCallback(async (initialPrompt: string) => {
    if (!initialPrompt.trim() || processingMessage) return;
    await handleSendMessage(initialPrompt);
  }, [handleSendMessage, processingMessage]);

  return {
    messages,
    isTyping,
    selectedOutput,
    error,
    handleSendMessage,
    initializeChat
  };
}