import React from 'react';
import { MessageContent as MessageContentType } from '../../../types';
import { theme } from '../../../shared/utils/theme';

interface MessageContentProps {
  content: MessageContentType;
}

export function MessageContent({ content }: MessageContentProps) {
  if (content.type === 'text') {
    return <p>{content.data as string}</p>;
  }

  if (content.type === 'agent-response') {
    const response = content.data as AgentResponse;
    return <p>{response.reasoning}</p>;
  }

  return null;
}