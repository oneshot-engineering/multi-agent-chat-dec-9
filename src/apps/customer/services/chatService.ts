import { v4 as uuidv4 } from "uuid";
import { Message, User } from "../../../types";
import { mockConversation, mockProposal } from "../utils/mockProposalData";
import { MockConversation } from "../types/proposal";

// Response type definition
export interface ChatResponse {
  message: Message;
  output?: any;
}

// Track conversation state
let currentProposalState: Partial<typeof mockProposal> = {};

// Helper to determine which part of proposal to return based on message
function getProposalSection(
  conversationData: MockConversation
): Partial<typeof mockProposal> {
  const preview = conversationData.response.data.preview;

  if (preview) {
    currentProposalState = {
      ...currentProposalState,
      ...preview,
    };
  }

  return currentProposalState;
}

// Helper to get appropriate response message
function getResponseMessage(conversationData: MockConversation): string {
  return conversationData.response.data.reasoning || 
         "I understand your request. Let me help you with that.";
}

// Helper to get follow-up question
function getFollowUpQuestion(conversationData: MockConversation): string | undefined {
  return conversationData.response.data.question;
}

function getMockConversationObject(message: string): MockConversation | undefined {
  const lowercaseMsg = message.toLowerCase().trim();
  return mockConversation.find(conversation => 
    conversation.request.data.toLowerCase().trim() === lowercaseMsg
  );
}

function createDefaultResponse(content: string, recipient: User): Message {
  return {
    id: uuidv4(),
    content: {
      type: "agent-response",
      data: {
        reasoning: "I understand your request. Let me help you with that.",
        output: {
          type: "proposal",
          data: currentProposalState,
        },
      },
    },
    sender: recipient,
    timestamp: new Date(),
    isRead: false,
    type: "message",
  };
}

export async function sendMessage(
  content: string,
  sender: User,
  recipient: User
): Promise<ChatResponse> {
  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Get mock conversation for the corresponding user request
    const conversationData = getMockConversationObject(content);

    if (!conversationData) {
      // If no exact match found, return a default response
      const defaultMessage = createDefaultResponse(content, recipient);
      return { message: defaultMessage };
    }

    // Get relevant proposal section and response message
    const proposalData = getProposalSection(conversationData);
    const responseMessage = getResponseMessage(conversationData);
    const followUpQuestion = getFollowUpQuestion(conversationData);

    // Create agent response message
    const message: Message = {
      id: uuidv4(),
      content: {
        type: "agent-response",
        data: {
          reasoning: responseMessage,
          question: followUpQuestion,
          output: {
            type: "proposal",
            data: proposalData,
          },
        },
      },
      sender: recipient,
      timestamp: new Date(),
      isRead: false,
      type: "message",
    };

    return {
      message,
      output: message.content.type === "agent-response" ? message.content.data.output : null,
    };
  } catch (error) {
    console.error("Error in sendMessage:", error);
    // Return a graceful fallback response instead of throwing
    const fallbackMessage = createDefaultResponse(content, recipient);
    return { message: fallbackMessage };
  }
}