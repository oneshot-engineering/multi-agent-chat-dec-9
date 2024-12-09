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

  currentProposalState = {
    ...currentProposalState,
    ...preview,
  };

  return currentProposalState;
}

// Helper to get appropriate response message
function getResponseMessage(conversationData: MockConversation): string {
  const reasoning = conversationData.response.data.reasoning;
  return reasoning || "echo";
}

function getMockConversationObject(message: string): MockConversation {
  const lowercaseMsg = message.toLowerCase();
  for (const conversation of mockConversation) {
    if (conversation.request.data.toLowerCase() === lowercaseMsg) {
      return conversation;
    }
  }
  throw new Error("No matching conversation found");
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

    const conversationData: MockConversation =
      getMockConversationObject(content);

    // Get relevant proposal section and response message
    const proposalData = getProposalSection(conversationData);
    const responseMessage = getResponseMessage(conversationData);

    // Create agent response message
    const message: Message = {
      id: uuidv4(),
      content: {
        type: "agent-response",
        data: {
          reasoning: responseMessage,
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
      output:
        message.content.type === "agent-response"
          ? message.content.data.output
          : null,
    };
  } catch (error) {
    console.error("Error in sendMessage:", error);
    throw new Error("Failed to process message");
  }
}
