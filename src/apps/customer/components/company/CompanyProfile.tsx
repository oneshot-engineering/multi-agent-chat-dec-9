import React from "react";
import { CompanyHeader } from "./sections/CompanyHeader";
import { CompanyDescription } from "./sections/CompanyDescription";
import { CompanyMetrics } from "./sections/CompanyMetrics";
import { PersonaCarousel } from "./components/PersonaCarousel";
import { theme } from "../../../../shared/utils/theme";
import { useCompanyData } from "./hooks/useCompanyData";

export function CompanyProfile() {
  const { data, isEditing, setIsEditing, handleUpdate } = useCompanyData();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div
          className="bg-white rounded-2xl shadow-sm border overflow-hidden"
          style={{ borderColor: theme.colors.border.light }}
        >
          <CompanyHeader
            data={data}
            isEditing={isEditing}
            onUpdate={handleUpdate}
            onToggleEdit={() => setIsEditing(!isEditing)}
          />

          <div className="p-8 space-y-12">
            <CompanyDescription
              data={data}
              isEditing={isEditing}
              onUpdate={handleUpdate}
            />

            <CompanyMetrics
              data={data}
              isEditing={isEditing}
              onUpdate={handleUpdate}
            />

            <PersonaCarousel
              personas={data.personas}
              isEditing={isEditing}
              onUpdate={(index, updatedPersona) => {
                const newPersonas = [...data.personas];
                newPersonas[index] = updatedPersona;
                handleUpdate("personas", newPersonas);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
