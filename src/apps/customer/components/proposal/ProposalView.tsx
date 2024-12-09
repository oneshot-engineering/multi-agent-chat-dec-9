import React from 'react';
import { SalesProposal } from '../../types/proposal';
import { PersonaSection } from './PersonaSection';
import { ExecutionPlanSection } from './ExecutionPlanSection';
import { TargetsSection } from './TargetsSection';
import { theme } from '../../../../shared/utils/theme';

interface ProposalViewProps {
  proposal: SalesProposal;
}

export function ProposalView({ proposal }: ProposalViewProps) {
  if (!proposal) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
          {proposal.company_name}
        </h1>
        <p className="text-lg" style={{ color: theme.colors.text.secondary }}>
          {proposal.short_description}
        </p>
      </div>

      {proposal.personas && proposal.personas.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: theme.colors.text.primary }}>
            Target Personas
          </h2>
          {proposal.personas.map((persona, index) => (
            <PersonaSection key={index} persona={persona} />
          ))}
        </div>
      )}

      {proposal.monthly_targets && (
        <TargetsSection monthlyTargets={proposal.monthly_targets} />
      )}

      {proposal.execution_plan && (
        <ExecutionPlanSection executionPlan={proposal.execution_plan} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {proposal.tools && (
          <div className="bg-white rounded-lg p-6 border" style={{ borderColor: theme.colors.border.light }}>
            <h3 className="text-xl font-semibold mb-4" style={{ color: theme.colors.text.primary }}>
              Tools & Technology
            </h3>
            {Object.entries(proposal.tools).map(([category, tools]) => (
              <div key={category} className="mb-4 last:mb-0">
                <h4 className="font-medium mb-2" style={{ color: theme.colors.text.primary }}>
                  {category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ backgroundColor: theme.colors.primary.light, color: theme.colors.primary.main }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {(proposal.KPIs || proposal.expected_outcomes) && (
          <div className="bg-white rounded-lg p-6 border" style={{ borderColor: theme.colors.border.light }}>
            <h3 className="text-xl font-semibold mb-4" style={{ color: theme.colors.text.primary }}>
              KPIs & Expected Outcomes
            </h3>
            
            {proposal.KPIs && (
              <div className="mb-6">
                <h4 className="font-medium mb-3" style={{ color: theme.colors.text.primary }}>
                  Key Performance Indicators
                </h4>
                {Object.entries(proposal.KPIs).map(([metric, value]) => (
                  <div key={metric} className="flex justify-between mb-2">
                    <span className="text-sm" style={{ color: theme.colors.text.secondary }}>
                      {metric.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}:
                    </span>
                    <span className="font-medium" style={{ color: theme.colors.text.primary }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {proposal.expected_outcomes && (
              <div>
                <h4 className="font-medium mb-3" style={{ color: theme.colors.text.primary }}>
                  Expected Outcomes
                </h4>
                {Object.entries(proposal.expected_outcomes).map(([outcome, description]) => (
                  <div key={outcome} className="mb-3 last:mb-0">
                    <h5 className="font-medium mb-1" style={{ color: theme.colors.text.primary }}>
                      {outcome.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </h5>
                    <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}