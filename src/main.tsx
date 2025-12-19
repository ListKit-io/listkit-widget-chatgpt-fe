// src/main.tsx
console.log("WIDGET BUILD 19-12-2025 v1");

import React from "react";
import ReactDOM from "react-dom/client";

import { WidgetRenderer } from "./WidgetRenderer";

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

export function renderWidget(templateId = "", data: any = {}, theme=''): void {
  const rootEl = document.getElementById("root");

  if (!rootEl) {
    console.error("renderWidget: missing root", { templateId });
    return;
  }

  if (!reactRoot) {
    reactRoot = ReactDOM.createRoot(rootEl);
  }

  reactRoot.render(
    <React.StrictMode>
      <WidgetRenderer data={data} theme={theme} />
    </React.StrictMode>
  );
}

// Widgets dev-preview
// This code runs only when you open index.html through npm run dev (Vite)
if (
  window.location.hostname === "localhost" &&
  document.getElementById("root")
) {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );

  root.render(
    <React.StrictMode>
      <WidgetRenderer data={data} />
      {/*<div style={{ padding: 16, display: "grid", gap: 32 }}>
        <h2>Direct widgets</h2>

          <WidgetRenderer
            templateId="people-base"
            data={{
              title: "Poeple",
              contacts: [
                {
                  id: "1",
                  fullName: "Emma Rivers",
                  companyName: "Mailchimp",
                  jobTitle: "User Research Director",
                },
              ],
            }}
          />

          <WidgetRenderer
            templateId="companies-base"
            data={{
              title: "Companies",
              contacts: [
                {
                  id: "1",
                  companyName: "Mailchimp",
                  fullName: "Emma Rivers",
                  jobTitle: "User Research Director",
                },
              ],
            }}
          />

          <WidgetRenderer
            templateId="companies-b2b"
            data={{
              title: "B2B Companies",
              contacts: [
                {
                  name: "photospire ltd",
                  domain: "spirable.com",
                  logo: "https://s3.amazonaws.com/media.mixrank.com/hero-img/b66926c24b2d211fcf3d33ff2d56b88c",
                  companyId: null,
                  companyName: "photospire ltd",
                  companyDomain: "spirable.com",
                  companyLogo: "https://s3.amazonaws.com/media.mixrank.com/hero-img/b66926c24b2d211fcf3d33ff2d56b88c"
                },
                {
                  name: "yellow sub hydro ltd",
                  domain: "yellowsubhydro.com",
                  logo: "https://s3.amazonaws.com/media.mixrank.com/hero-img/6fdcb0dfc972f7e7ebd5c7c0efb92792",
                  companyId: null,
                  companyName: "yellow sub hydro ltd",
                  companyDomain: "yellowsubhydro.com",
                  companyLogo: "https://s3.amazonaws.com/media.mixrank.com/hero-img/6fdcb0dfc972f7e7ebd5c7c0efb92792"
                },
                {
                  name: "simplifie",
                  domain: "simplifie.com",
                  logo: "https://s3.amazonaws.com/media.mixrank.com/hero-img/d64bba940277a5bc542bd0b0cd32f23e",
                  companyId: null,
                  companyName: "simplifie",
                  companyDomain: "simplifie.com",
                  companyLogo: "https://s3.amazonaws.com/media.mixrank.com/hero-img/d64bba940277a5bc542bd0b0cd32f23e"
                },
              ],
            }}
          />
      </div>*/}
    </React.StrictMode>
  );
}
