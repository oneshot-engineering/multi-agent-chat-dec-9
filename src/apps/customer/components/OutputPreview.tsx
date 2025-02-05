import React from "react";
import { theme } from "../../../shared/utils/theme";
import { Message } from "../types";
import { SalesCompanyProfile } from "./company/SalesCompanyProfile";
import RecruiterCompanyProfile from "./company/RecruiterCompanyProfile";
import { StepsPreview } from "./StepsPreview";
import { FileText, Clock } from "lucide-react";

interface OutputPreviewProps {
  message: Message;
}

export function OutputPreview({ message }: OutputPreviewProps) {
  return (
    <div className="h-full overflow-hidden">
      <StepsPreview />
    </div>
  );
}