import { SalesProposal, MockConversation } from "../types/proposal";

export const mockProposal: SalesProposal = {
  company_name: "TechSales AI",
  short_description:
    "An AI-powered sales enablement platform that combines automation with human expertise to accelerate B2B sales cycles and increase conversion rates.",
  personas: [
    {
      persona: "Sales Managers",
      ICP: "B2B SaaS companies with 50-500 employees, $5M-$50M ARR, primarily in North America and Europe",
      pain_points: [
        "Manual and time-consuming sales processes",
        "Inconsistent sales performance across team members",
        "Difficulty scaling outreach efforts effectively",
      ],
      value_proposition:
        "Automate repetitive sales tasks while maintaining personalization, enabling sales teams to focus on high-value activities and close more deals",
      competitive_advantage: [
        "AI-powered personalization at scale",
        "Seamless integration with existing CRM systems",
        "Real-time performance analytics",
      ],
      results: [
        "40% increase in sales team productivity",
        "2.5x improvement in response rates",
        "30% reduction in sales cycle length",
      ],
    },
  ],
  channels: ["Email", "LinkedIn", "Cold Calling"],
  monthly_targets: {
    prospects_to_reach: 1000,
    email_outreach: {
      volume: 800,
      structure: "Multi-step sequences with specified touchpoints",
      goal: "10% response rate",
    },
    cold_calls: {
      volume: 500,
      structure: "Follow-up process specified for two rounds",
      goal: "15% conversation rate",
    },
    linkedin_messages: {
      volume: 400,
      structure:
        "Personalized outreach with connection requests and follow-ups",
      goal: "20% connection acceptance rate, 5% response rate",
    },
  },
  KPIs: {
    response_rate: "10% across email and LinkedIn",
    meetings_booked: "20-30 qualified meetings/month",
    pipeline_value: "$50,000-$75,000 in new pipeline monthly",
    conversion_rate: "20% of booked meetings lead to opportunities",
  },
  execution_plan: {
    detail: "Detailed week-by-week plan for outreach efforts",
  },
  tools: ["CRM", "Email Automation", "Analytics Dashboard"],
  expected_outcomes: "Increased sales efficiency and higher conversion rates",
};

export const mockConversation: MockConversation[] = [
  {
    request: {
      sender: "user",
      data: "Setup outbound for oneshot.ai",
    },
    response: {
      sender: "agent",
      data: {
        reasoning:
          "Sure, First I built your company profile with all the key personas you sell to.",
        output: "sales",
      },
    },
  },

  {
    request: {
      sender: "user",
      data: "Fill open roles for my Talent Pro",
    },
    response: {
      sender: "agent",
      data: {
        reasoning:
          "Sure, First I built your company profile with all the open positions.",
        output: "recruiter",
      },
    },
  },
];
