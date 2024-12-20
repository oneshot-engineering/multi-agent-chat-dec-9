import React from "react";
import {
  Building2,
  Users,
  MapPin,
  Target,
  Briefcase,
  Calendar,
  Award,
  ChevronRight,
} from "lucide-react";
import { theme } from "../../../../shared/utils/theme";

const roles = [
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Austin, TX (Hybrid)",
    type: "Full-time",
    timeline: "8 weeks",
    requirements: [
      "5+ years in backend development",
      "Proficient in Python, AWS, microservices",
      "Team player with mentoring experience",
      "Experience with high-scale systems",
    ],
    channels: ["LinkedIn", "GitHub", "Stack Overflow"],
  },
  {
    title: "Product Marketing Manager",
    department: "Marketing",
    location: "Austin, TX (Hybrid)",
    type: "Full-time",
    timeline: "Next quarter",
    requirements: [
      "4+ years in B2B SaaS product marketing",
      "Strong storytelling and positioning skills",
      "Data analysis expertise",
      "Product launch experience",
    ],
    channels: ["LinkedIn", "Product Marketing Alliances", "Referrals"],
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Austin, TX (Hybrid)",
    type: "Full-time",
    timeline: "Next quarter",
    requirements: [
      "3-5 years in CSM roles",
      "Enterprise client management experience",
      "Strong onboarding and renewal expertise",
      "Problem-solving mindset",
    ],
    channels: ["LinkedIn", "Gainsight Network", "Internal Referrals"],
  },
];

const stats = [
  { label: "Employees", value: "150+" },
  { label: "Office Locations", value: "3" },
  { label: "Client Companies", value: "200+" },
  { label: "Years in Business", value: "8" },
];

const values = [
  {
    title: "Innovation First",
    description:
      "We push boundaries and embrace new technologies to solve complex HR challenges.",
  },
  {
    title: "Customer Obsessed",
    description:
      "Our success is measured by the success of our customers and their growth.",
  },
  {
    title: "Collaborative Spirit",
    description:
      "We believe in the power of teamwork and cross-functional collaboration.",
  },
  {
    title: "Continuous Learning",
    description:
      "We invest in our team's growth through mentorship and professional development.",
  },
];

export default function RecruiterCompanyProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-8 h-8" />
              <h1 className="text-4xl font-bold">TalentPro Inc.</h1>
            </div>
            <p className="text-xl mb-8 text-emerald-50">
              Revolutionizing recruitment and onboarding through innovative HR
              technology solutions. We help companies build exceptional teams
              with our cutting-edge software platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <MapPin className="w-5 h-5" />
                <span>Austin, Texas</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Briefcase className="w-5 h-5" />
                <span>HR Technology</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Users className="w-5 h-5" />
                <span>150+ Employees</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border"
              style={{ borderColor: theme.colors.border.light }}
            >
              <div
                className="text-3xl font-bold mb-2"
                style={{ color: theme.colors.primary.main }}
              >
                {stat.value}
              </div>
              <div style={{ color: theme.colors.text.secondary }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: theme.colors.text.primary }}
            >
              About TalentPro
            </h2>
            <div
              className="prose max-w-none"
              style={{ color: theme.colors.text.secondary }}
            >
              <p className="mb-4">
                TalentPro Inc. is a leading provider of HR technology solutions,
                specializing in recruitment and onboarding software for
                mid-sized and large enterprises. Our platform streamlines
                candidate pipelines, enhances employer branding, and delivers
                exceptional candidate experiences.
              </p>
              <p>
                We serve mid-sized tech companies with 100-1000 employees,
                providing scalable solutions that grow with their needs. Our
                commitment to innovation and customer success has made us a
                trusted partner for over 200 companies nationwide.
              </p>
            </div>
          </div>
          <div>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: theme.colors.text.primary }}
            >
              Our Values
            </h2>
            <div className="grid gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border"
                  style={{ borderColor: theme.colors.border.light }}
                >
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: theme.colors.text.primary }}
                  >
                    {value.title}
                  </h3>
                  <p style={{ color: theme.colors.text.secondary }}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2
            className="text-2xl font-bold mb-8"
            style={{ color: theme.colors.text.primary }}
          >
            Open Positions
          </h2>
          <div className="grid gap-6">
            {roles.map((role, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border"
                style={{ borderColor: theme.colors.border.light }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ color: theme.colors.text.primary }}
                    >
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      <div
                        className="flex items-center gap-2"
                        style={{ color: theme.colors.text.secondary }}
                      >
                        <Briefcase className="w-4 h-4" />
                        <span>{role.department}</span>
                      </div>
                      <div
                        className="flex items-center gap-2"
                        style={{ color: theme.colors.text.secondary }}
                      >
                        <MapPin className="w-4 h-4" />
                        <span>{role.location}</span>
                      </div>
                      <div
                        className="flex items-center gap-2"
                        style={{ color: theme.colors.text.secondary }}
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Hiring Timeline: {role.timeline}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-white transition-colors"
                    style={{ backgroundColor: theme.colors.primary.main }}
                  >
                    Apply Now
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4
                      className="font-medium mb-3 flex items-center gap-2"
                      style={{ color: theme.colors.text.primary }}
                    >
                      <Target className="w-4 h-4" />
                      Key Requirements
                    </h4>
                    <ul className="space-y-2">
                      {role.requirements.map((req, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2"
                          style={{ color: theme.colors.text.secondary }}
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{
                              backgroundColor: theme.colors.primary.main,
                            }}
                          />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4
                      className="font-medium mb-3 flex items-center gap-2"
                      style={{ color: theme.colors.text.primary }}
                    >
                      <Award className="w-4 h-4" />
                      Sourcing Channels
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {role.channels.map((channel, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-sm"
                          style={{
                            backgroundColor: theme.colors.primary.light,
                            color: theme.colors.primary.main,
                          }}
                        >
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
