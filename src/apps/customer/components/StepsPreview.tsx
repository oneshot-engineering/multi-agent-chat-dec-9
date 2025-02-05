import React, { useState, useEffect } from 'react';
import { Brain, Users, Building2, UserCircle2, Mail, Linkedin, Phone, Rocket, ArrowRight, Sparkles, ChevronDown, ChevronUp, CheckCircle, Star, TrendingUp, Target } from 'lucide-react';
import { theme } from '../../../shared/utils/theme';
import { ExpertMatchingModal } from './ExpertMatchingModal';

interface StepAgent {
  ai: {
    count: number;
    roles: string[];
  };
  human: {
    count: number;
    roles: string[];
  };
}

interface ExecutionStep {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  agents: StepAgent;
  color: string;
  bgColor: string;
  progress: number;
  benefits: string[];
  deliverables: string[];
  caseStudy?: {
    company: string;
    result: string;
    metric: string;
  };
}

const steps: ExecutionStep[] = [
  {
    id: 'research',
    title: 'Research Company',
    description: 'Deep analysis of OneShot.ai\'s market position, competitors, and growth opportunities',
    icon: Building2,
    agents: {
      ai: {
        count: 15,
        roles: ['Data Analysis AI', 'Market Research AI', 'Competitor Analysis AI']
      },
      human: {
        count: 8,
        roles: ['Industry Expert', 'Market Analyst', 'Strategy Consultant']
      }
    },
    color: '#2563eb',
    bgColor: '#dbeafe',
    progress: 0,
    benefits: [
      'Identify untapped market opportunities',
      'Understand competitor strategies',
      'Define unique value propositions'
    ],
    deliverables: [
      'Comprehensive market analysis report',
      'Competitor positioning matrix',
      'Growth opportunity roadmap'
    ],
    caseStudy: {
      company: 'TechCorp Inc',
      result: 'Identified 3 new market segments',
      metric: '45% revenue growth'
    }
  },
  {
    id: 'personas',
    title: 'Build Personas',
    description: 'Creating detailed, data-driven buyer personas for precise targeting',
    icon: UserCircle2,
    agents: {
      ai: {
        count: 12,
        roles: ['Data Mining AI', 'Pattern Recognition AI', 'Behavioral Analysis AI']
      },
      human: {
        count: 10,
        roles: ['Buyer Psychology Expert', 'Sales Strategist', 'Customer Research Analyst']
      }
    },
    color: '#7c3aed',
    bgColor: '#ede9fe',
    progress: 0,
    benefits: [
      'Precise audience targeting',
      'Personalized messaging strategy',
      'Higher conversion rates'
    ],
    deliverables: [
      'Detailed buyer personas',
      'Decision-making journey maps',
      'Pain point analysis'
    ],
    caseStudy: {
      company: 'SaaS Solutions',
      result: 'Created 5 targeted personas',
      metric: '3x engagement rate'
    }
  },
  {
    id: 'leads',
    title: 'Find Leads',
    description: 'AI-powered lead generation matching OneShot.ai\'s ideal customer profile',
    icon: Users,
    agents: {
      ai: {
        count: 20,
        roles: ['Lead Generation AI', 'Data Enrichment AI', 'Lead Scoring AI']
      },
      human: {
        count: 5,
        roles: ['Lead Qualification Expert', 'Data Quality Analyst']
      }
    },
    color: '#059669',
    bgColor: '#d1fae5',
    progress: 0,
    benefits: [
      'High-quality lead generation',
      'Automated lead scoring',
      'Real-time data enrichment'
    ],
    deliverables: [
      'Verified leads database',
      'Lead scoring matrix',
      'Contact enrichment data'
    ],
    caseStudy: {
      company: 'GrowthCo',
      result: 'Generated 1000+ qualified leads',
      metric: '28% conversion rate'
    }
  },
  {
    id: 'email',
    title: 'Email Strategy',
    description: 'Crafting personalized, high-converting email sequences',
    icon: Mail,
    agents: {
      ai: {
        count: 18,
        roles: ['Email Copywriting AI', 'A/B Testing AI', 'Personalization AI']
      },
      human: {
        count: 12,
        roles: ['Email Marketing Strategist', 'Copywriter', 'Campaign Manager']
      }
    },
    color: '#dc2626',
    bgColor: '#fee2e2',
    progress: 0,
    benefits: [
      'Personalized email sequences',
      'Automated A/B testing',
      'Optimized send times'
    ],
    deliverables: [
      'Email sequence templates',
      'A/B testing strategy',
      'Performance metrics dashboard'
    ],
    caseStudy: {
      company: 'MarketPro',
      result: 'Achieved 45% open rate',
      metric: '12% response rate'
    }
  },
  {
    id: 'linkedin',
    title: 'LinkedIn Strategy',
    description: 'Building engaging LinkedIn outreach campaigns',
    icon: Linkedin,
    agents: {
      ai: {
        count: 14,
        roles: ['Content AI', 'Connection AI', 'Engagement AI']
      },
      human: {
        count: 15,
        roles: ['LinkedIn Expert', 'Content Strategist', 'Social Seller']
      }
    },
    color: '#0284c7',
    bgColor: '#e0f2fe',
    progress: 0,
    benefits: [
      'Targeted connection requests',
      'Engaging content strategy',
      'Automated follow-ups'
    ],
    deliverables: [
      'Connection message templates',
      'Content calendar',
      'Engagement tracking'
    ],
    caseStudy: {
      company: 'B2B Solutions',
      result: 'Generated 500+ connections',
      metric: '35% acceptance rate'
    }
  },
  {
    id: 'calling',
    title: 'Cold Calling',
    description: 'Executing data-driven cold calling campaigns',
    icon: Phone,
    agents: {
      ai: {
        count: 10,
        roles: ['Call Script AI', 'Voice Analysis AI', 'Scheduling AI']
      },
      human: {
        count: 20,
        roles: ['Sales Development Rep', 'Cold Calling Expert', 'Sales Coach']
      }
    },
    color: '#ea580c',
    bgColor: '#fff7ed',
    progress: 0,
    benefits: [
      'Optimized call scripts',
      'Real-time call coaching',
      'Automated follow-ups'
    ],
    deliverables: [
      'Call scripts library',
      'Performance analytics',
      'Call recordings'
    ],
    caseStudy: {
      company: 'Sales Pro Inc',
      result: 'Booked 50+ meetings',
      metric: '15% conversion rate'
    }
  },
  {
    id: 'launch',
    title: 'Launch & Track',
    description: 'Monitoring and optimizing campaign performance',
    icon: Rocket,
    agents: {
      ai: {
        count: 25,
        roles: ['Analytics AI', 'Optimization AI', 'Reporting AI']
      },
      human: {
        count: 8,
        roles: ['Campaign Manager', 'Data Analyst', 'Strategy Consultant']
      }
    },
    color: '#4f46e5',
    bgColor: '#eef2ff',
    progress: 0,
    benefits: [
      'Real-time performance tracking',
      'Automated optimization',
      'ROI analysis'
    ],
    deliverables: [
      'Performance dashboard',
      'Optimization reports',
      'ROI analysis'
    ],
    caseStudy: {
      company: 'Growth Leaders',
      result: 'Achieved 300% ROI',
      metric: '$2M pipeline'
    }
  }
];

export function StepsPreview() {
  const [activeSteps, setActiveSteps] = useState<string[]>([]);
  const [showContent, setShowContent] = useState(false);
  const [expandedStep, setExpandedStep] = useState<string | null>(null);
  const [showMatchingModal, setShowMatchingModal] = useState(false);
  const [selectedStep, setSelectedStep] = useState<{color: string; title: string} | null>(null);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 100);
    steps.forEach((step, index) => {
      setTimeout(() => {
        setActiveSteps(prev => [...prev, step.id]);
      }, (index + 1) * 800);
    });
  }, []);

  const handleMatchExperts = (step: typeof steps[0]) => {
    setSelectedStep({ color: step.color, title: step.title });
    setShowMatchingModal(true);
  };

  const totalProgress = (activeSteps.length / steps.length) * 100;

  return (
    <div className="h-full overflow-y-auto">
      <div className="min-h-full bg-gray-50 p-6">
        <div 
          className={`max-w-6xl mx-auto bg-white rounded-xl border shadow-lg overflow-hidden transition-all duration-1000 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ borderColor: theme.colors.border.light }}
        >
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90" />
            <div className="relative p-8 text-white">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-10 h-10" />
                  <div>
                    <h1 className="text-3xl font-bold">
                      Outbound Campaign Strategy
                    </h1>
                    <p className="text-lg text-blue-100">
                      for OneShot.ai
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <Brain className="w-4 h-4" />
                      <span className="font-medium text-sm">AI-Powered</span>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      <span className="font-medium text-sm">Data-Driven</span>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span className="font-medium text-sm">Expert Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-2 w-full bg-gray-200">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                style={{ width: `${totalProgress}%` }}
              />
            </div>
          </div>

          <div className="p-6">
            <div className="grid gap-4">
              {steps.map((step, index) => {
                const isActive = activeSteps.includes(step.id);
                const isExpanded = expandedStep === step.id;
                
                return (
                  <div 
                    key={step.id}
                    className={`transition-all duration-500 ${
                      isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                  >
                    <div 
                      className={`bg-white rounded-xl border transition-shadow ${
                        isExpanded ? 'shadow-lg' : 'hover:shadow-md'
                      }`}
                      style={{ borderColor: theme.colors.border.light }}
                    >
                      <div 
                        className="p-6 cursor-pointer"
                        onClick={() => setExpandedStep(isExpanded ? null : step.id)}
                      >
                        <div className="flex items-start gap-6">
                          <div 
                            className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 text-xl font-bold ${
                              isActive ? 'scale-100' : 'scale-90'
                            }`}
                            style={{ 
                              backgroundColor: step.bgColor,
                              color: step.color
                            }}
                          >
                            {index + 1}
                          </div>

                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <div className="flex items-center gap-3">
                                  <step.icon className="w-6 h-6" style={{ color: step.color }} />
                                  <h3 className="text-lg font-semibold" style={{ color: theme.colors.text.primary }}>
                                    {step.title}
                                  </h3>
                                </div>
                                <p className="text-sm mt-1" style={{ color: theme.colors.text.secondary }}>
                                  {step.description}
                                </p>
                              </div>
                              <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                                {isExpanded ? (
                                  <ChevronUp className="w-5 h-5 text-gray-400" />
                                ) : (
                                  <ChevronDown className="w-5 h-5 text-gray-400" />
                                )}
                              </button>
                            </div>

                            <div className="flex items-center gap-6">
                              <div className="flex items-center gap-2">
                                <div className="p-1.5 rounded-lg bg-blue-50">
                                  <Brain className="w-4 h-4 text-blue-600" />
                                </div>
                                <div>
                                  <p className="text-xs text-gray-500">AI Agents</p>
                                  <p className="font-semibold" style={{ color: theme.colors.text.primary }}>
                                    {step.agents.ai.count}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="p-1.5 rounded-lg bg-green-50">
                                  <Users className="w-4 h-4 text-green-600" />
                                </div>
                                <div>
                                  <p className="text-xs text-gray-500">Human Experts</p>
                                  <p className="font-semibold" style={{ color: theme.colors.text.primary }}>
                                    {step.agents.human.count}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="px-6 pb-6">
                          <div className="pt-6 border-t" style={{ borderColor: theme.colors.border.light }}>
                            <div className="grid md:grid-cols-2 gap-8">
                              <div className="space-y-6">
                                <div>
                                  <h4 className="font-medium mb-3" style={{ color: theme.colors.text.primary }}>
                                    Key Benefits
                                  </h4>
                                  <div className="space-y-2">
                                    {step.benefits.map((benefit, index) => (
                                      <div key={index} className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span style={{ color: theme.colors.text.secondary }}>
                                          {benefit}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-medium mb-3" style={{ color: theme.colors.text.primary }}>
                                    Deliverables
                                  </h4>
                                  <div className="space-y-2">
                                    {step.deliverables.map((deliverable, index) => (
                                      <div key={index} className="flex items-center gap-2">
                                        <div 
                                          className="w-1.5 h-1.5 rounded-full"
                                          style={{ backgroundColor: step.color }}
                                        />
                                        <span style={{ color: theme.colors.text.secondary }}>
                                          {deliverable}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {step.caseStudy && (
                                  <div 
                                    className="p-4 rounded-lg"
                                    style={{ backgroundColor: step.bgColor }}
                                  >
                                    <div className="flex items-center gap-2 mb-2">
                                      <Star className="w-5 h-5" style={{ color: step.color }} />
                                      <h4 className="font-medium" style={{ color: step.color }}>
                                        Success Story: {step.caseStudy.company}
                                      </h4>
                                    </div>
                                    <p className="text-sm mb-2" style={{ color: theme.colors.text.secondary }}>
                                      {step.caseStudy.result}
                                    </p>
                                    <p 
                                      className="text-sm font-medium"
                                      style={{ color: step.color }}
                                    >
                                      {step.caseStudy.metric}
                                    </p>
                                  </div>
                                )}
                              </div>

                              <div className="space-y-6">
                                <div>
                                  <h4 className="font-medium mb-3" style={{ color: theme.colors.text.primary }}>
                                    AI Capabilities
                                  </h4>
                                  <div className="grid gap-2">
                                    {step.agents.ai.roles.map((role, index) => (
                                      <div 
                                        key={index}
                                        className="flex items-center gap-2 p-2 rounded-lg bg-blue-50"
                                      >
                                        <Brain className="w-4 h-4 text-blue-600" />
                                        <span className="text-sm text-blue-900">{role}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-medium mb-3" style={{ color: theme.colors.text.primary }}>
                                    Human Expertise
                                  </h4>
                                  <div className="grid gap-2">
                                    {step.agents.human.roles.map((role, index) => (
                                      <div 
                                        key={index}
                                        className="flex items-center gap-2 p-2 rounded-lg bg-green-50"
                                      >
                                        <Users className="w-4 h-4 text-green-600" />
                                        <span className="text-sm text-green-900">{role}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="flex gap-4">
                                  <button
                                    onClick={() => handleMatchExperts(step)}
                                    className="flex-1 py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90 border-2"
                                    style={{ 
                                      borderColor: step.color,
                                      color: step.color
                                    }}
                                  >
                                    <Users className="w-5 h-5" />
                                    Match Experts
                                  </button>
                                  <button
                                    className="flex-1 py-3 px-4 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90"
                                    style={{ backgroundColor: step.color }}
                                  >
                                    Start {step.title}
                                    <ArrowRight className="w-5 h-5" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    Ready to Launch Your Campaign?
                  </h3>
                  <p className="text-blue-100 text-sm">
                    Our AI agents and human experts are ready to help
                  </p>
                </div>
                <button
                  className="px-6 py-3 bg-white rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  style={{ color: theme.colors.primary.main }}
                >
                  Hire Agents
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showMatchingModal && selectedStep && (
        <ExpertMatchingModal
          isOpen={showMatchingModal}
          onClose={() => setShowMatchingModal(false)}
          stepColor={selectedStep.color}
          stepTitle={selectedStep.title}
        />
      )}
    </div>
  );
}