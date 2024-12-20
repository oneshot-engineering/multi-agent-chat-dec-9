import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AgentSelectionPage from "./pages/AgentSelectionPage";
import ChatPage from "./pages/ChatPage";
import SalesCompanyProfilePage from "./pages/RecruiterCompanyProfilePage";
import RecruiterCompanyProfilePage from "./pages/RecruiterCompanyProfilePage";
import CampaignLaunchPage from "./pages/CampaignLaunchPage";

export function CustomerApp() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/select-agents" element={<AgentSelectionPage />} />
      <Route path="/chat/:jobId" element={<ChatPage />} />
      <Route
        path="/sales-company-profile"
        element={<SalesCompanyProfilePage />}
      />
      <Route
        path="/recruiter-company-profile"
        element={<RecruiterCompanyProfilePage />}
      />
      <Route path="/campaign/launch" element={<CampaignLaunchPage />} />
    </Routes>
  );
}
