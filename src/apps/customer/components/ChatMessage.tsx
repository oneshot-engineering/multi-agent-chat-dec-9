import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Check, CheckCheck, ArrowRight } from 'lucide-react';
import { MessageContent } from './MessageContent';
import { theme } from '../../../shared/utils/theme';
import type { Message } from '../types';

interface ChatMessageProps {
  message: Message;
  isOwnMessage: boolean;
  onSelect?: () => void;
  onSuggestionClick?: (suggestion: string) => void;
}

export function ChatMessage({ 
  message, 
  isOwnMessage, 
  onSelect,
  onSuggestionClick 
}: ChatMessageProps) {
  const getQuestion = () => {
    if (message.content.type === 'agent-response' && 
        typeof message.content.data !== 'string' && 
        message.content.data.question) {
      return message.content.data.question;
    }
    return null;
  };

  const question = getQuestion();

  return (
    <div
      className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'} mb-4`}
      onClick={onSelect}
    >
      {!isOwnMessage && (
        <img
          src={message.sender.avatar}
          alt={message.sender.name}
          className="w-8 h-8 rounded-full mr-2"
        />
      )}
      <div className={`max-w-[70%] ${isOwnMessage ? 'order-1' : 'order-2'}`}>
        {!isOwnMessage && (
          <div
            className="text-sm mb-1"
            style={{ color: theme.colors.text.secondary }}
          >
            {message.sender.name}
          </div>
        )}
        <div
          className={`rounded-2xl px-4 py-2 ${
            isOwnMessage ? 'rounded-br-none' : 'rounded-bl-none'
          } cursor-pointer hover:opacity-90 transition-opacity`}
          style={{
            backgroundColor: isOwnMessage
              ? theme.colors.primary.main
              : theme.colors.background.secondary,
            color: isOwnMessage ? '#FFFFFF' : theme.colors.text.primary,
            border: isOwnMessage
              ? 'none'
              : `1px solid ${theme.colors.border.light}`,
          }}
        >
          <MessageContent content={message.content} />
        </div>

        {/* Follow-up Question */}
        {!isOwnMessage && question && (
          <button
            onClick={() => onSuggestionClick?.(question)}
            className="mt-2 flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors"
            style={{
              backgroundColor: theme.colors.primary.light,
              color: theme.colors.primary.main,
            }}
          >
            <span>Suggested: {question}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}

        <div
          className="flex items-center mt-1 text-xs"
          style={{ color: theme.colors.text.secondary }}
        >
          <span>
            {formatDistanceToNow(message.timestamp, { addSuffix: true })}
          </span>
          {isOwnMessage && (
            <span className="ml-2">
              {message.isRead ? (
                <CheckCheck
                  className="w-4 h-4"
                  style={{ color: theme.colors.primary.main }}
                />
              ) : (
                <Check className="w-4 h-4" />
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}