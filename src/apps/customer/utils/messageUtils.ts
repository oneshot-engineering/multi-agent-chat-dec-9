import { v4 as uuidv4 } from 'uuid';
import type {
  Message,
  SystemMessage,
  TypingMessage,
  User,
  MessageContent,
  Company,
} from '../types';

export function createMessage(
  content: string | MessageContent,
  sender: User
): Message {
  const messageContent: MessageContent =
    typeof content === 'string' ? { type: 'text', data: content } : content;

  return {
    id: uuidv4(),
    content: messageContent,
    sender,
    timestamp: new Date(),
    isRead: false,
    type: 'message',
  };
}

export function createSystemMessage(content: string): SystemMessage {
  return {
    id: uuidv4(),
    content,
    timestamp: new Date(),
    type: 'system',
  };
}

export function createTypingMessage(sender: User): TypingMessage {
  return {
    id: uuidv4(),
    sender,
    timestamp: new Date(),
    type: 'typing',
  };
}

const companies: Company[] = [
  {
    name: 'Salesforce',
    logo: 'https://logo.clearbit.com/salesforce.com',
    description: 'Leading CRM platform for sales, service, and marketing',
    industry: 'Enterprise Software',
    size: 'Enterprise',
    location: 'San Francisco, CA',
    founded: '1999',
    website: 'https://salesforce.com',
    metrics: {
      employees: '50,000+',
      funding: 'Public (NYSE: CRM)',
      revenue: '$21.25B (2021)',
    },
  },
  {
    name: 'HubSpot',
    logo: 'https://logo.clearbit.com/hubspot.com',
    description: 'Inbound marketing and sales software platform',
    industry: 'Marketing Software',
    size: 'Enterprise',
    location: 'Cambridge, MA',
    founded: '2006',
    website: 'https://hubspot.com',
    metrics: {
      employees: '5,000+',
      funding: 'Public (NYSE: HUBS)',
      revenue: '$1.3B (2021)',
    },
  },
  {
    name: 'Zoom',
    logo: 'https://logo.clearbit.com/zoom.us',
    description: 'Video communications and collaboration platform',
    industry: 'Communications',
    size: 'Enterprise',
    location: 'San Jose, CA',
    founded: '2011',
    website: 'https://zoom.us',
    metrics: {
      employees: '6,800+',
      funding: 'Public (NASDAQ: ZM)',
      revenue: '$4.1B (2021)',
    },
  },
  {
    name: 'Slack',
    logo: 'https://logo.clearbit.com/slack.com',
    description: 'Business communication and collaboration platform',
    industry: 'Enterprise Software',
    size: 'Enterprise',
    location: 'San Francisco, CA',
    founded: '2009',
    website: 'https://slack.com',
    metrics: {
      employees: '2,500+',
      funding: 'Acquired by Salesforce',
      revenue: '$902M (2021)',
    },
  },
  {
    name: 'Notion',
    logo: 'https://logo.clearbit.com/notion.so',
    description: 'All-in-one workspace for notes, docs, and collaboration',
    industry: 'Productivity Software',
    size: 'Growth',
    location: 'San Francisco, CA',
    founded: '2016',
    website: 'https://notion.so',
    metrics: {
      employees: '400+',
      funding: '$275M',
      revenue: '$100M+ (2021)',
    },
  },
  {
    name: 'Airtable',
    logo: 'https://logo.clearbit.com/airtable.com',
    description: 'Low-code platform for building collaborative applications',
    industry: 'Productivity Software',
    size: 'Growth',
    location: 'San Francisco, CA',
    founded: '2012',
    website: 'https://airtable.com',
    metrics: {
      employees: '1,000+',
      funding: '$1.4B',
      revenue: '$200M+ (2021)',
    },
  },
  {
    name: 'MongoDB',
    logo: 'https://logo.clearbit.com/mongodb.com',
    description: 'Modern database platform for innovative applications',
    industry: 'Database Software',
    size: 'Enterprise',
    location: 'New York, NY',
    founded: '2007',
    website: 'https://mongodb.com',
    metrics: {
      employees: '3,500+',
      funding: 'Public (NASDAQ: MDB)',
      revenue: '$873.8M (2021)',
    },
  },
  {
    name: 'Twilio',
    logo: 'https://logo.clearbit.com/twilio.com',
    description: 'Cloud communications and customer engagement platform',
    industry: 'Communications',
    size: 'Enterprise',
    location: 'San Francisco, CA',
    founded: '2008',
    website: 'https://twilio.com',
    metrics: {
      employees: '7,500+',
      funding: 'Public (NYSE: TWLO)',
      revenue: '$2.84B (2021)',
    },
  },
  {
    name: 'Stripe',
    logo: 'https://logo.clearbit.com/stripe.com',
    description: 'Payment processing platform for internet businesses',
    industry: 'Financial Technology',
    size: 'Enterprise',
    location: 'San Francisco, CA',
    founded: '2010',
    website: 'https://stripe.com',
    metrics: {
      employees: '4,000+',
      funding: 'Private ($95B valuation)',
      revenue: '$7.4B (2020)',
    },
  },
];

// Generate company response based on query
export function generateCompanyResponse(query: string): MessageContent {
  // In a real application, you would filter companies based on the query
  // For this example, we'll return all companies
  return {
    type: 'companies',
    data: companies,
  };
}
