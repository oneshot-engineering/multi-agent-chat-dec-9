import React, { useState, useEffect } from 'react';
import { X, Star, Clock, Phone, CheckCircle, ArrowRight, MessageSquare } from 'lucide-react';
import { theme } from '../../../shared/utils/theme';

interface Expert {
  name: string;
  avatar: string;
  role: string;
  experience: string;
  calls: number;
  rating: number;
  successRate: string;
  responseTime: string;
  skills: string[];
}

const experts: Expert[] = [
  {
    name: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop",
    role: "Senior Sales Strategist",
    experience: "8+ years",
    calls: 1500,
    rating: 4.9,
    successRate: "92%",
    responseTime: "< 30 mins",
    skills: ["B2B Sales", "Cold Calling", "Sales Strategy", "Lead Generation"]
  },
  {
    name: "Michael Park",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
    role: "Enterprise Sales Expert",
    experience: "10+ years",
    calls: 2000,
    rating: 4.8,
    successRate: "89%",
    responseTime: "< 1 hour",
    skills: ["Enterprise Sales", "Solution Selling", "Sales Leadership", "Account Management"]
  },
  {
    name: "Emma Wilson",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
    role: "Sales Development Manager",
    experience: "6+ years",
    calls: 1200,
    rating: 4.7,
    successRate: "85%",
    responseTime: "< 45 mins",
    skills: ["Sales Development", "Team Leadership", "Pipeline Management", "Sales Training"]
  }
];

interface ExpertMatchingModalProps {
  isOpen: boolean;
  onClose: () => void;
  stepColor: string;
  stepTitle: string;
}

export function ExpertMatchingModal({ isOpen, onClose, stepColor, stepTitle }: ExpertMatchingModalProps) {
  const [phase, setPhase] = useState<'scanning' | 'analyzing' | 'matched'>('scanning');
  const [currentExpertIndex, setCurrentExpertIndex] = useState(0);
  const [matchedExpert, setMatchedExpert] = useState<Expert | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Reset states when modal opens
      setPhase('scanning');
      setCurrentExpertIndex(0);
      setMatchedExpert(null);

      // Simulate scanning phase
      const scanInterval = setInterval(() => {
        setCurrentExpertIndex(prev => (prev + 1) % experts.length);
      }, 800);

      // After 4 seconds, move to analyzing phase
      setTimeout(() => {
        clearInterval(scanInterval);
        setPhase('analyzing');
      }, 4000);

      // After 7 seconds, show the match
      setTimeout(() => {
        setPhase('matched');
        setMatchedExpert(experts[1]); // Select the best match
      }, 7000);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b relative" style={{ borderColor: theme.colors.border.light }}>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" style={{ color: theme.colors.text.secondary }} />
          </button>
          <h3 className="text-xl font-semibold" style={{ color: theme.colors.text.primary }}>
            Finding Expert for {stepTitle}
          </h3>
          <p className="text-sm mt-1" style={{ color: theme.colors.text.secondary }}>
            Matching you with the best human expert for your needs
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {phase === 'scanning' && (
            <div className="text-center py-12">
              <div className="relative w-32 h-32 mx-auto mb-8">
                {/* Scanning circle animation */}
                <div className="absolute inset-0 border-4 rounded-full animate-ping" 
                  style={{ borderColor: stepColor }} 
                />
                <img
                  src={experts[currentExpertIndex].avatar}
                  alt="Scanning"
                  className="w-full h-full rounded-full object-cover border-4 border-white"
                />
              </div>
              <h4 className="text-lg font-medium mb-2" style={{ color: theme.colors.text.primary }}>
                Scanning Expert Database
              </h4>
              <p style={{ color: theme.colors.text.secondary }}>
                Analyzing expertise, experience, and performance metrics...
              </p>
            </div>
          )}

          {phase === 'analyzing' && (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span style={{ color: theme.colors.text.secondary }}>Analyzing Experience</span>
                      <span style={{ color: stepColor }}>45%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full animate-pulse" style={{ width: '45%', backgroundColor: stepColor }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span style={{ color: theme.colors.text.secondary }}>Matching Skills</span>
                      <span style={{ color: stepColor }}>78%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full animate-pulse" style={{ width: '78%', backgroundColor: stepColor }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span style={{ color: theme.colors.text.secondary }}>Checking Availability</span>
                      <span style={{ color: stepColor }}>92%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full animate-pulse" style={{ width: '92%', backgroundColor: stepColor }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {phase === 'matched' && matchedExpert && (
            <div className="py-6">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-4 relative">
                  <img
                    src={matchedExpert.avatar}
                    alt={matchedExpert.name}
                    className="w-full h-full rounded-full object-cover border-4"
                    style={{ borderColor: stepColor }}
                  />
                  <div 
                    className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: stepColor }}
                  >
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-1" style={{ color: theme.colors.text.primary }}>
                  {matchedExpert.name}
                </h4>
                <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                  {matchedExpert.role} • {matchedExpert.experience}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <div>
                      <p className="text-sm" style={{ color: theme.colors.text.secondary }}>Rating</p>
                      <p className="font-semibold" style={{ color: theme.colors.text.primary }}>
                        {matchedExpert.rating}/5.0
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-sm" style={{ color: theme.colors.text.secondary }}>Calls Completed</p>
                      <p className="font-semibold" style={{ color: theme.colors.text.primary }}>
                        {matchedExpert.calls.toLocaleString()}+
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-sm" style={{ color: theme.colors.text.secondary }}>Success Rate</p>
                      <p className="font-semibold" style={{ color: theme.colors.text.primary }}>
                        {matchedExpert.successRate}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-500" />
                    <div>
                      <p className="text-sm" style={{ color: theme.colors.text.secondary }}>Response Time</p>
                      <p className="font-semibold" style={{ color: theme.colors.text.primary }}>
                        {matchedExpert.responseTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h5 className="font-medium mb-3" style={{ color: theme.colors.text.primary }}>Expertise</h5>
                <div className="flex flex-wrap gap-2">
                  {matchedExpert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ backgroundColor: stepColor + '20', color: stepColor }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  className="flex-1 py-3 px-4 rounded-lg font-medium border-2 flex items-center justify-center gap-2"
                  style={{ borderColor: stepColor, color: stepColor }}
                >
                  <MessageSquare className="w-5 h-5" />
                  Message Expert
                </button>
                <button
                  className="flex-1 py-3 px-4 rounded-lg text-white font-medium flex items-center justify-center gap-2"
                  style={{ backgroundColor: stepColor }}
                >
                  Start Collaboration
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}