import React from "react";
import { Header } from "../components/Header";
import { SalesCompanyProfile } from "../components/company/SalesCompanyProfile";

export default function SalesCompanyProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        showBack
        title="Company Profile"
        subtitle="View and edit your company information"
      />
      <SalesCompanyProfile />
    </div>
  );
}
