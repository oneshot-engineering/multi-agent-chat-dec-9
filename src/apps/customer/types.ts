import { MessageContent as BaseMessageContent, Message as BaseMessage } from '../../types';
import { SalesProposal } from './types/proposal';

export interface AgentResponse {
  reasoning: string;
  question?: string;
  output: {
    type: 'companies' | 'table' | 'strategy' | 'analysis' | 'proposal';
    data: any;
  };
}

export interface MessageContent extends BaseMessageContent {
  type: 'text' | 'agent-response';
  data: string | AgentResponse;
}

export interface Message extends BaseMessage {
  content: MessageContent;
}