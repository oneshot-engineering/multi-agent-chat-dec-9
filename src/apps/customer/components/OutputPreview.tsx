import React from 'react';
import { theme } from '../../../shared/utils/theme';
import { Message } from '../types';
import { ProposalView } from './proposal/ProposalView';
import type { SalesProposal } from '../types/proposal';

interface OutputPreviewProps {
  message: Message;
}

export function OutputPreview({ message }: OutputPreviewProps) {
  const renderOutput = (response: any) => {
    if (!response?.output?.type) return null;

    switch (response.output.type) {
      case 'proposal':
        if (!response.output.data) return null;
        return <ProposalView proposal={response.output.data as SalesProposal} />;

      case 'companies':
        if (!response.output.data) return null;
        return (
          <div className="grid gap-4">
            {response.output.data.map((company: any, index: number) => (
              <div
                key={index}
                className="border rounded-lg p-4"
                style={{ borderColor: theme.colors.border.light }}
              >
                <div className="flex items-start gap-4">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h3 className="font-medium" style={{ color: theme.colors.text.primary }}>
                      {company.name}
                    </h3>
                    <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                      {company.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'table':
        if (!response.output.data?.headers || !response.output.data?.rows) return null;
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y" style={{ borderColor: theme.colors.border.light }}>
              <thead>
                <tr>
                  {response.output.data.headers.map((header: string, index: number) => (
                    <th
                      key={index}
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                      style={{ color: theme.colors.text.secondary }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: theme.colors.border.light }}>
                {response.output.data.rows.map((row: any[], rowIndex: number) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-6 py-4 whitespace-nowrap text-sm"
                        style={{ color: theme.colors.text.primary }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'strategy':
      case 'analysis':
        if (!response.output.data?.sections) return null;
        return (
          <div className="prose max-w-none">
            {response.output.data.sections.map((section: any, index: number) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold mb-4" style={{ color: theme.colors.text.primary }}>
                  {section.title}
                </h3>
                <div className="space-y-4">
                  {section.content.map((paragraph: string, pIndex: number) => (
                    <p key={pIndex} style={{ color: theme.colors.text.secondary }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={message.sender.avatar}
              alt={message.sender.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="font-medium" style={{ color: theme.colors.text.primary }}>
                {message.sender.name}
              </h2>
              <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                {new Date(message.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
        {message.content.type === 'agent-response' && renderOutput(message.content.data)}
      </div>
    </div>
  );
}