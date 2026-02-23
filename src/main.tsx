console.log("UNIVERSAL WIDGET BUILD 23-02-2026");

import React from "react";
import ReactDOM from "react-dom/client";
import { App as MCPApp } from "@modelcontextprotocol/ext-apps";
import { WidgetRenderer } from "./WidgetRenderer";

function getSystemTheme(): "light" | "dark" {
  const htmlTheme = document.documentElement.getAttribute("data-theme");
  if (htmlTheme === "dark") return "dark";

  if ((window as any).openai?.theme) {
    return (window as any).openai?.theme;
  }

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
}

let reactRoot: ReactDOM.Root | null = null;

export function renderWidget(
  templateId = "",
  data: any = {},
  theme = "",
): void {
  const safeData = {
    ...data,
  };

  const rootEl = document.getElementById("root");
  if (!rootEl) return;

  if (!reactRoot) {
    reactRoot = ReactDOM.createRoot(rootEl);
  }

  const currentTheme = theme || getSystemTheme();

  reactRoot.render(
    <React.StrictMode>
      <WidgetRenderer data={safeData} theme={currentTheme} />
    </React.StrictMode>,
  );
}

(window as any).renderWidget = renderWidget;

const mcpApp = new MCPApp({
  name: "people-widget",
  version: "1.0.0",
});

mcpApp.ontoolresult = (result) => {
  const textItem = result?.content?.find(
    (c): c is { type: "text"; text: string } => c.type === "text",
  );
  if (textItem?.text) {
    try {
      renderWidget("claude-mcp", JSON.parse(textItem.text));
    } catch (e) {
      console.error("MCP JSON parse error", e);
    }
  }
};

if (window.location.hostname !== "localhost") {
  try {
    mcpApp.connect().catch((err) => {
    });
  } catch (e) {
  }
}

window.addEventListener("message", (event) => {
  const isGeminiData =
    event.data?.type === "GEMINI_TOOL_OUTPUT" || event.data?.toolOutput;

  if (isGeminiData) {
    const data = event.data.payload || event.data.toolOutput;

    let finalData = data;
    if (typeof data === "string") {
      try {
        finalData = JSON.parse(data);
      } catch (e) {
        return;
      }
    }

    renderWidget("gemini", finalData);
  }
});

const chatGPTEvents = [
  "openai:tool_output",
  "openai:set_globals",
  "openai:render",
  "openai:update",
];

chatGPTEvents.forEach((eventName) => {
  window.addEventListener(eventName as any, () => {
    const data = (window as any).openai?.toolOutput;
    const theme = (window as any).openai?.theme || "light";
    if (data) {
      renderWidget("chatgpt", data, theme);
    }
  });
});

if (window.location.hostname === "localhost" && !(window as any).openai) {
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
  renderWidget("local-dev", data);
} else {
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      const data =
        (window as any).openai?.toolOutput || (window as any).lastMcpData;
      if (data) {
        renderWidget("visibility-refresh", data);
      }
    }
  });

  if (document.readyState === "complete") {
    renderWidget(
      "script-load-complete",
      (window as any).openai?.toolOutput || {},
    );
  } else {
    window.addEventListener("load", () => {
      renderWidget(
        "window-load-complete",
        (window as any).openai?.toolOutput || {},
      );
    });
  }
}
