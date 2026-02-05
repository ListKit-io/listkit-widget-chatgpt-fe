// src/main.tsx
console.log("WIDGET BUILD 05-02-2026 v111");

import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@modelcontextprotocol/ext-apps";
import { WidgetRenderer } from "./WidgetRenderer";

const mcpApp = new App({
  name: "people-widget",
  version: "1.0.0",
});

function getClaudeTheme(): "light" | "dark" {
  const bgColor = window.getComputedStyle(document.body).backgroundColor;

  console.log(
    window.getComputedStyle(document.body),
    window.getComputedStyle(document.body).backgroundColor,
  );

  const rgb = bgColor.match(/\d+/g);

  if (rgb && rgb.length >= 3) {
    const r = parseInt(rgb[0]);
    const g = parseInt(rgb[1]);
    const b = parseInt(rgb[2]);

    const brightness = (r + g + b) / 3;

    return brightness < 128 ? "dark" : "light";
  }

  return "light";
}

mcpApp.ontoolresult = (result) => {
  const textItem = result?.content?.find(
    (c): c is { type: "text"; text: string } => c.type === "text",
  );

  if (textItem?.text) {
    try {
      const parsedData = JSON.parse(textItem.text);
      const currentTheme = getClaudeTheme();
      renderWidget("", parsedData, currentTheme);
    } catch (e) {
      console.error("MCP JSON parse error", e);
    }
  }
};

mcpApp.connect();

const data = {
  applied_filters: {
    geo: "Italy",
    q: "company zimbabve",
    country: ["italy"],
    jobTitle: ["founder", "ceo"],
  },
  title: "cto in la",
  result_count: 5,
  results: [
    {
      name: "sinalp",
      domain: "sinalp.it",
      logo: "https://logo.clearbit.com/sinalp.it",
      companyId: null,
      companyName: "sinalp",
      companyDomain: "sinalp.it",
      companyLogo: null,
    },
    {
      name: "cm service",
      domain: "cmservicesrl.it",
      logo: "https://s3.amazonaws.com/media.mixrank.com/hero-img/497920869b72d69f9bb30ef96e72d2f0",
      companyId: null,
      companyName: "cm service",
      companyDomain: "cmservicesrl.it",
      companyLogo:
        "https://s3.amazonaws.com/media.mixrank.com/hero-img/497920869b72d69f9bb30ef96e72d2f0",
    },
    {
      name: "across srl",
      domain: "across.it",
      logo: "https://s3.amazonaws.com/media.mixrank.com/hero-img/b23e652ba9522267e307ded6deeebf91",
      companyId: null,
      companyName: "across srl",
      companyDomain: "across.it",
      companyLogo:
        "https://s3.amazonaws.com/media.mixrank.com/hero-img/b23e652ba9522267e307ded6deeebf91",
    },
    {
      name: "studio rigotto",
      domain: "studiorigotto.it",
      logo: "https://s3.amazonaws.com/media.mixrank.com/hero-img/5f76d5285a7f447c248ff801c617842e",
      companyId: null,
      companyName: "studio rigotto",
      companyDomain: "studiorigotto.it",
      companyLogo:
        "https://s3.amazonaws.com/media.mixrank.com/hero-img/5f76d5285a7f447c248ff801c617842e",
    },
    {
      name: "brainy, the thinking revenue management platform",
      domain: "brainyrms.com",
      logo: "https://s3.amazonaws.com/media.mixrank.com/hero-img/31ee3130bf7eec857ba3fe9fb610c7d7",
      companyId: null,
      companyName: "brainy, the thinking revenue management platform",
      companyDomain: "brainyrms.com",
      companyLogo:
        "https://s3.amazonaws.com/media.mixrank.com/hero-img/31ee3130bf7eec857ba3fe9fb610c7d7",
    },
  ],
  error: null,
};

let reactRoot: ReactDOM.Root | null = null;

export function renderWidget(
  templateId = "",
  data: any = {},
  theme = "",
): void {
  const rootEl = document.getElementById("root");

  if (!rootEl) {
    console.error("renderWidget: missing root", { templateId });
    return;
  }

  if (!reactRoot) {
    reactRoot = ReactDOM.createRoot(rootEl);
  }

  console.log("theme in renderWidget", theme);

  reactRoot.render(
    <React.StrictMode>
      <WidgetRenderer data={data} theme={theme} />
    </React.StrictMode>,
  );
}

(window as any).renderWidget = renderWidget;

if (
  window.location.hostname === "localhost" &&
  document.getElementById("root")
) {
  renderWidget("", data, "light");
}
