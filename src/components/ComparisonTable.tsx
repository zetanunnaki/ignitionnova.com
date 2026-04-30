"use client";

import { motion } from "framer-motion";

const features = [
  { name: "Dedicated Hours", starter: "15/mo", growth: "30/mo", scale: "50/mo", enterprise: "Unlimited" },
  { name: "Technical SEO Audit", starter: true, growth: true, scale: true, enterprise: true },
  { name: "Core Web Vitals Optimization", starter: true, growth: true, scale: true, enterprise: true },
  { name: "Schema Markup", starter: true, growth: true, scale: true, enterprise: true },
  { name: "Keyword Strategy", starter: true, growth: true, scale: true, enterprise: true },
  { name: "Content Creation", starter: "4/mo", growth: "8/mo", scale: "Unlimited", enterprise: "Unlimited" },
  { name: "Monthly Reports", starter: true, growth: true, scale: true, enterprise: true },
  { name: "GEO (AI Search Optimization)", starter: false, growth: true, scale: true, enterprise: true },
  { name: "AI Visibility Monitoring", starter: false, growth: true, scale: true, enterprise: true },
  { name: "Paid Ads Management", starter: false, growth: true, scale: true, enterprise: true },
  { name: "Link Building Campaign", starter: false, growth: true, scale: true, enterprise: true },
  { name: "CRO Experiments", starter: false, growth: "4/mo", scale: "Unlimited", enterprise: "Unlimited" },
  { name: "Strategy Calls", starter: "Monthly", growth: "Bi-Weekly", scale: "Weekly", enterprise: "Weekly" },
  { name: "Dedicated Account Manager", starter: false, growth: true, scale: true, enterprise: true },
  { name: "Social Media Management", starter: false, growth: false, scale: true, enterprise: true },
  { name: "Email Marketing & Automation", starter: false, growth: false, scale: true, enterprise: true },
  { name: "Video Content Production", starter: false, growth: false, scale: true, enterprise: true },
  { name: "Bespoke Analytics Dashboard", starter: false, growth: false, scale: true, enterprise: true },
  { name: "Custom Web Development", starter: false, growth: false, scale: false, enterprise: true },
  { name: "Multi-Market / International SEO", starter: false, growth: false, scale: false, enterprise: true },
  { name: "Team Training & Workshops", starter: false, growth: false, scale: false, enterprise: true },
  { name: "Priority SLA", starter: false, growth: false, scale: false, enterprise: true },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    );
  }
  if (value === false) {
    return <span className="text-border/80">—</span>;
  }
  return <span className="text-xs font-medium text-primary">{value}</span>;
}

export function ComparisonTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-x-auto"
    >
      <table className="w-full min-w-[780px]">
        <thead>
          <tr>
            <th className="text-left p-4 font-heading font-semibold text-primary text-sm border-b border-border/30">
              Feature
            </th>
            <th className="text-center p-4 font-heading font-semibold text-primary text-sm border-b border-border/30">
              Starter
            </th>
            <th className="text-center p-4 font-heading font-semibold text-accent text-sm border-b border-accent/20 bg-accent/[0.03]">
              Growth
            </th>
            <th className="text-center p-4 font-heading font-semibold text-primary text-sm border-b border-border/30">
              Scale
            </th>
            <th className="text-center p-4 font-heading font-semibold text-primary text-sm border-b border-border/30">
              Enterprise
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, i) => (
            <tr
              key={feature.name}
              className={`transition-colors hover:bg-accent/[0.02] ${i % 2 === 0 ? "bg-surface/30" : ""}`}
            >
              <td className="p-4 text-sm text-muted border-b border-border/20 font-light">
                {feature.name}
              </td>
              <td className="p-4 text-center border-b border-border/20">
                <div className="flex justify-center">
                  <CellValue value={feature.starter} />
                </div>
              </td>
              <td className="p-4 text-center border-b border-border/20 bg-accent/[0.03]">
                <div className="flex justify-center">
                  <CellValue value={feature.growth} />
                </div>
              </td>
              <td className="p-4 text-center border-b border-border/20">
                <div className="flex justify-center">
                  <CellValue value={feature.scale} />
                </div>
              </td>
              <td className="p-4 text-center border-b border-border/20">
                <div className="flex justify-center">
                  <CellValue value={feature.enterprise} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
