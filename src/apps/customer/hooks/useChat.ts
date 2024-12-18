import { useState, useCallback, useEffect } from 'react';
import { Message, User } from '../../../types';
import { sendMessage } from '../services/chatService';
import { createMessage } from '../utils/messageUtils';

interface UseChatProps {
  currentUser: User;
  recipient: User;
  initialPrompt?: string;
}

export function useChat({ currentUser, recipient, initialPrompt }: UseChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedOutput, setSelectedOutput] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [processingMessage, setProcessingMessage] = useState(false);
  const [initialized, setInitialized] = useState(false);

  // Initialize chat with welcome message from agent
  useEffect(() => {
    if (!initialized) {
      const welcomeMessage = createMessage({
        type: 'text',
        data: `Hi, I'm ${recipient.name}. ${recipient.description} How can I help you today?`
      }, recipient);
      
      setMessages([welcomeMessage]);
      setInitialized(true);

      // If there's an initial prompt, send it after a brief delay
      if (initialPrompt) {
        const timer = setTimeout(() => {
          handleSendMessage(initialPrompt);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [recipient, initialized, initialPrompt]);

  const handleSendMessage = useCallback(async (content: string) => {
    if (processingMessage) return;

    try {
      setProcessingMessage(true);
      
      // Create and add user message
      const userMessage = createMessage({
        type: 'text',
        data: content
      }, currentUser);
      
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

  const initializeChat = useCallback(async (prompt: string) => {
    if (!prompt.trim() || processingMessage) return;
    await handleSendMessage(prompt);
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