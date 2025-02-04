import { v4 as uuidv4 } from "uuid";
import { Message, User } from "../../../types";

// Response type definition
export interface ChatResponse {
  message: Message;
  output?: any;
}


export async function sendMessage(
  content: string,
  sender: User,
  recipient: User
): Promise<ChatResponse> {
  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));



    // Create agent response message
    const message: Message = {
      id: uuidv4(),
      content: {
        type: "agent-response",
        data: {
          reasoning: "Sure, let me help you.",
          question: "Go head! Launch campaign",
          output: {
            type: "proposal",
            data: "I can help you with that. Do you want me to proceed?",
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
    throw new Error("Failed to send message");
  }
}