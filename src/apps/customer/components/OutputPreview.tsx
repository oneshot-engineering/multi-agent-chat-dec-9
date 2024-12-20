import React from "react";
import { theme } from "../../../shared/utils/theme";
import { Message } from "../types";
import { SalesCompanyProfile } from "./company/SalesCompanyProfile";
import RecruiterCompanyProfile from "./company/RecruiterCompanyProfile";
import { FileText, Clock } from "lucide-react";

interface OutputPreviewProps {
  message: Message;
}

export function OutputPreview({ message }: OutputPreviewProps) {
  const renderOutput = (response: any) => {
    //return <SalesCompanyProfile />;
    return <RecruiterCompanyProfile></RecruiterCompanyProfile>;
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {/* New Header */}
        <div
          className="sticky top-0 bg-white border-b px-6 py-4 mb-6 z-10"
          style={{ borderColor: theme.colors.border.light }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="p-2 rounded-lg"
                style={{ backgroundColor: theme.colors.primary.light }}
              >
                <FileText
                  className="w-5 h-5"
                  style={{ color: theme.colors.primary.main }}
                />
              </div>
              <div>
                <h2
                  className="text-lg font-semibold"
                  style={{ color: theme.colors.text.primary }}
                >
                  {message.content.type === "agent-response" &&
                  message.content.data.output?.type === "company_profile"
                    ? "Company Profile"
                    : "Strategy Proposal"}
                </h2>
                <div
                  className="flex items-center gap-2 text-sm"
                  style={{ color: theme.colors.text.secondary }}
                >
                  <Clock className="w-4 h-4" />
                  <span>
                    Last updated {new Date(message.timestamp).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6">
          {message.content.type === "agent-response" &&
            renderOutput(message.content.data)}
        </div>
      </div>
    </div>
  );
}
