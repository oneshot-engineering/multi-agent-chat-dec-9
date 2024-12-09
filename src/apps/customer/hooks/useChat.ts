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

  const handleSendMessage = useCallback(async (content: string) => {
    try {
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
    }
  }, [currentUser, recipient]);

  return {
    messages,
    isTyping,
    selectedOutput,
    error,
    handleSendMessage
  };
}