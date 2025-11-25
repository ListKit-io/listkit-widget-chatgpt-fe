// src/widgets/WidgetCompanyBase.tsx
import React from "react";
import type { CompanyBase } from "./types";

interface CompanyBaseProps {
  data: CompanyBase[];
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

export const CompaniesBaseWidget: React.FC<CompanyBaseProps> = ({
  data = [],
  title = "Companies",
}) => {

  console.log("[WIDGET CompaniesBase] data =", data);
  
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
              <th style={headerCellStyle}>Company 4</th>
              <th style={headerCellStyle}>Full name 5</th>
              <th style={headerCellStyle}>Job Title 6</th>
            </tr>
          </thead>

          <tbody>
            {data.map((c, idx) => (
              <tr
                key={c.id || idx}
                style={{
                  backgroundColor: idx % 2 === 1 ? "#f9fafb" : "#ffffff",
                }}
              >
                <td style={cellStyle}>{c.companyName}</td>
                <td style={cellStyle}>{c.fullName}</td>
                <td style={cellStyle}>{c.jobTitle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
