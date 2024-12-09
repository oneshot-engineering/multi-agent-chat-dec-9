// Update User interface to include jobFunction
export interface User {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
  type: 'AI' | 'Human';
  description: string;
  role: string;
  jobFunction: 'Sales' | 'Marketing' | 'Development' | 'Design' | 'Support';
  metrics: AgentMetrics;
  workSamples: WorkSample[];
  lastActive: Date;
}

export interface BaseMessage {
  id: string;
  timestamp: Date;
  type: 'message' | 'system' | 'typing';
}

export interface AgentResponse {
  reasoning: string;
  output: {
    type: 'companies' | 'table' | 'strategy' | 'analysis';
    data: any;
  };
}

export interface MessageContent {
  type: 'text' | 'agent-response';
  data: string | AgentResponse;
}

export interface Message extends BaseMessage {
  type: 'message';
  content: MessageContent;
  sender: User;
  isRead: boolean;
}

export interface SystemMessage extends BaseMessage {
  type: 'system';
  content: string;
}

export interface TypingMessage extends BaseMessage {
  type: 'typing';
  sender: User;
}

export interface Company {
  name: string;
  logo: string;
  description: string;
  industry: string;
  size: string;
  location: string;
  founded: string;
  website: string;
  metrics: {
    employees: string;
    funding: string;
    revenue: string;
  };
}

export interface WorkSample {
  title: string;
  description: string;
  link: string;
  date: Date;
  metrics?: string;
}

export interface AgentMetrics {
  projectsCompleted: number;
  responseTime: string;
  satisfactionRate: number;
  lastActive: Date;
}