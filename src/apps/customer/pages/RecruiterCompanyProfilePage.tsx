import React from "react";
import { Header } from "../components/Header";
import RecruiterCompanyProfile from "../components/company/RecruiterCompanyProfile";

export default function SalesCompanyProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        showBack
        title="Company Profile"
        subtitle="View and edit your company information"
      />
      <RecruiterCompanyProfile />
    </div>
  );
}
