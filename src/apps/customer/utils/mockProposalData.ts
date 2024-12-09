import { SalesProposal } from '../types/proposal';

export const mockProposal: SalesProposal = {
  company_name: "TechSales AI",
  short_description: "An AI-powered sales enablement platform that combines automation with human expertise to accelerate B2B sales cycles and increase conversion rates.",
  personas: [
    {
      persona: "Sales Managers",
      ICP: "B2B SaaS companies with 50-500 employees, $5M-$50M ARR, primarily in North America and Europe",
      pain_points: [
        "Manual and time-consuming sales processes",
        "Inconsistent sales performance across team members",
        "Difficulty scaling outreach efforts effectively"
      ],
      value_proposition: "Automate repetitive sales tasks while maintaining personalization, enabling sales teams to focus on high-value activities and close more deals",
      competitive_advantage: [
        "AI-powered personalization at scale",
        "Seamless integration with existing CRM systems",
        "Real-time performance analytics"
      ],
      results: [
        "40% increase in sales team productivity",
        "2.5x improvement in response rates",
        "30% reduction in sales cycle length"
      ]
    }
  ],
  channels: ["Email", "LinkedIn", "Cold Calling"],
  monthly_targets: {
    prospects_to_reach: 1000,
    email_outreach: {
      volume: 800,
      structure: "Multi-step sequences with specified touchpoints",
      goal: "10% response rate"
    },
    cold_calls: {
      volume: 500,
      structure: "Follow-up process specified for two rounds",
      goal: "15% conversation rate"
    },
    linkedin_messages: {
      volume: 400,
      structure: "Personalized outreach with connection requests and follow-ups",
      goal: "20% connection acceptance rate, 5% response rate"
    }
  },
  KPIs: {
    response_rate: "10% across email and LinkedIn",
    meetings_booked: "20-30 qualified meetings/month",
    pipeline_value: "$50,000-$75,000 in new pipeline monthly",
    conversion_rate: "20% of booked meetings lead to opportunities"
  }
};

export const mockConversation = [
  {
    type: 'text',
    data: "Help me put together an outbound strategy."
  },
  {
    type: 'agent-response',
    data: {
      reasoning: "Sure, let me understand your company a bit first.",
      question: "What is your company's website domain?"
    }
  },
  {
    type: 'text',
    data: "techsales.ai"
  },
  {
    type: 'agent-response',
    data: {
      reasoning: "Thank you for providing the domain. I have now researched your company and summarized the details.",
      output: {
        type: 'preview',
        data: {
          short_description: mockProposal.short_description
        }
      },
      question: "Now, let's build your personas. Who are your target audiences?"
    }
  },
  {
    type: 'text',
    data: "Sales Managers and SDR Managers."
  },
  {
    type: 'agent-response',
    data: {
      reasoning: "Great! I've added personas for Sales Managers and SDR Managers to your strategy. Let’s define KPIs next.",
      output: {
        type: 'preview',
        data: {
          personas: mockProposal.personas
        }
      },
      question: "What are the key metrics you'd like to track (e.g., response rates, meetings booked, pipeline growth)?"
    }
  },
  {
    type: 'text',
    data: "Response rates and meetings booked."
  },
  {
    type: 'agent-response',
    data: {
      reasoning: "Got it. I've set up KPIs based on response rates and meetings booked. Now, let's focus on the execution plan.",
      output: {
        type: 'preview',
        data: {
          KPIs: mockProposal.KPIs
        }
      },
      question: "Would you like me to create a detailed week-by-week plan for your outreach efforts?"
    }
  },
  {
    type: 'text',
    data: "Yes, please."
  },
  {
    type: 'agent-response',
    data: {
      reasoning: "Here’s a detailed week-by-week execution plan for your outbound strategy. This includes preparation, tools, and workflow recommendations.",
      output: {
        type: 'proposal',
        data: mockProposal
      },
      question: "Does this strategy align with your goals? Let me know if you'd like to adjust anything."
    }
  }
];
