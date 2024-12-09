import { v4 as uuidv4 } from "uuid";
import { Message, User } from "../../../types";
import { mockProposal } from "../utils/mockProposalData";

// Response type definition
export interface ChatResponse {
  message: Message;
  output?: any;
}

// Track conversation state
let currentProposalState: Partial<typeof mockProposal> = {};

// Helper to determine which part of proposal to return based on message
function getProposalSection(message: string): Partial<typeof mockProposal> {
  const lowercaseMsg = message.toLowerCase();

  // Build proposal incrementally based on keywords
  if (lowercaseMsg.includes("strategy") || lowercaseMsg.includes("outbound")) {
    currentProposalState = {
      company_name: mockProposal.company_name,
      short_description: mockProposal.short_description,
    };
  }

  if (lowercaseMsg.includes("persona") || lowercaseMsg.includes("target")) {
    currentProposalState = {
      ...currentProposalState,
      personas: mockProposal.personas,
    };
  }

  if (lowercaseMsg.includes("kpi") || lowercaseMsg.includes("metrics")) {
    currentProposalState = {
      ...currentProposalState,
      KPIs: mockProposal.KPIs,
    };
  }

  if (lowercaseMsg.includes("plan") || lowercaseMsg.includes("execution")) {
    currentProposalState = {
      ...currentProposalState,
      execution_plan: mockProposal.execution_plan,
      monthly_targets: mockProposal.monthly_targets,
    };
  }

  return currentProposalState;
}

// Helper to get appropriate response message
function getResponseMessage(message: string): string {
  const lowercaseMsg = message.toLowerCase();

  if (lowercaseMsg.includes("strategy") || lowercaseMsg.includes("outbound")) {
    return "I understand you're looking for an outbound strategy. Let me help you with that.";
  }

  if (lowercaseMsg.includes("persona") || lowercaseMsg.includes("target")) {
    return "Great! Let's define your target personas and audience.";
  }

  if (lowercaseMsg.includes("kpi") || lowercaseMsg.includes("metrics")) {
    return "I'll help you set up appropriate KPIs to track success.";
  }

  if (lowercaseMsg.includes("plan") || lowercaseMsg.includes("execution")) {
    return "Here's a detailed execution plan to achieve your goals.";
  }

  return "echo";
}

export async function sendMessage(
  content: string,
  sender: User,
  recipient: User
): Promise<ChatResponse> {
  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Get relevant proposal section and response message
    const proposalData = getProposalSection(content);
    const responseMessage = getResponseMessage(content);

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
