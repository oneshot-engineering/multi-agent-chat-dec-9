import { v4 as uuidv4 } from 'uuid';
import { Message, User } from '../../../types';
import { mockConversation } from '../utils/mockProposalData';

export interface ChatResponse {
  message: Message;
  output?: any;
}

const getDefaultResponse = (content: string, recipient: User): ChatResponse => {
  return {
    message: {
      id: uuidv4(),
      content: {
        type: 'agent-response',
        data: {
          reasoning: "I understand your request. Let me help you with that.",
          output: {
            type: 'text',
            data: "How can I assist you further?"
          }
        }
      },
      sender: recipient,
      timestamp: new Date(),
      isRead: false,
      type: 'message'
    }
  };
};

const findMatchingResponse = (content: string): any => {
  // First try exact match
  const exactMatch = mockConversation.findIndex(msg => 
    msg.type === 'text' && msg.data === content
  );
  
  if (exactMatch !== -1 && exactMatch + 1 < mockConversation.length) {
    return mockConversation[exactMatch + 1];
  }

  // Try partial match
  const partialMatch = mockConversation.findIndex(msg => 
    msg.type === 'text' && 
    typeof msg.data === 'string' && 
    content.toLowerCase().includes(msg.data.toLowerCase())
  );

  if (partialMatch !== -1 && partialMatch + 1 < mockConversation.length) {
    return mockConversation[partialMatch + 1];
  }

  return null;
};

export async function sendMessage(content: string, sender: User, recipient: User): Promise<ChatResponse> {
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Find matching response
    const agentResponse = findMatchingResponse(content);

    // If no matching response found, return default response
    if (!agentResponse) {
      return getDefaultResponse(content, recipient);
    }

    // Create agent message
    const message: Message = {
      id: uuidv4(),
      content: {
        type: 'agent-response',
        data: agentResponse.data
      },
      sender: recipient,
      timestamp: new Date(),
      isRead: false,
      type: 'message'
    };

    return {
      message,
      output: agentResponse.data.output
    };

  } catch (error) {
    console.error('Error in sendMessage:', error);
    // Return default response instead of throwing error
    return getDefaultResponse(content, recipient);
  }
}
