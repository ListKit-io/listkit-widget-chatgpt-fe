// src/widgets/WidgetCompaniesB2B.tsx
import React from "react";
import type { CompanyB2B } from "./types";

interface CompaniesB2BProps {
  data: CompanyB2B[];
  title?: string;
}

const headerCellStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "10px 14px",
  fontWeight: 600,
  fontSize: 13,
  borderBottom: "1px solid #e5e7eb",
  whiteSpace: "nowrap",
};

const cellStyle: React.CSSProperties = {
  padding: "9px 14px",
  fontSize: 13,
  borderBottom: "1px solid #f3f4f6",
  verticalAlign: "middle",
};

export const CompaniesB2BWidget: React.FC<CompaniesB2BProps> = ({
  data = [],
  title = "B2B Companies",
}) => {
  console.log("[WIDGET CompaniesB2B] data =", data);

  return (
    <div
      style={{
        padding: 16,
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          overflow: "hidden",
        }}
      >
        {/* Навигационная строка в стиле listkit */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 24px",
            borderBottom: "1px solid #e5e7eb",
            backgroundColor: "#ffffff",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <a
              href="https://listkit.io"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://listkit.io", "_blank", "noopener,noreferrer");
              }}
              style={{
                fontWeight: 700,
                fontSize: 24,
                color: "#1e293b",
                textDecoration: "none",
                cursor: "pointer",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              listkit
            </a>
          </div>
          <div style={{ display: "flex", gap: 16, fontSize: 14 }}>
            <span style={{ color: "#1e293b", cursor: "pointer" }}>Log In</span>
            <span
              style={{
                color: "#1e293b",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Book a Demo
            </span>
          </div>
        </div>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead style={{ backgroundColor: "#f9fafb" }}>
            <tr>
              <th style={headerCellStyle}>Company</th>
              <th style={headerCellStyle}>Domain</th>
            </tr>
          </thead>

          <tbody>
            {data.map((company, idx) => (
              <tr
                key={company.companyId || idx}
                style={{
                  backgroundColor: idx % 2 === 1 ? "#f9fafb" : "#ffffff",
                }}
              >
                <td style={cellStyle}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    {company.companyLogo && (
                      <img
                        src={company.companyLogo}
                        alt={company.companyName}
                        style={{
                          width: 32,
                          height: 32,
                          objectFit: "contain",
                          borderRadius: 4,
                          backgroundColor: "#f9fafb",
                        }}
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    )}
                    <span style={{ fontWeight: 500 }}>{company.companyName}</span>
                  </div>
                </td>
                <td style={cellStyle}>
                  <a
                    href={`https://${company.companyDomain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#3b82f6",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textDecoration = "underline";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textDecoration = "none";
                    }}
                  >
                    {company.companyDomain}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

