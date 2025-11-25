// src/widgets/types.ts
export interface WidgetProps<TData = unknown> {
  data?: TData;
  title?: string;
  onAction?: (payload: unknown) => void;
}

export interface PeopleBase {
  id: string;
  fullName: string;
  companyName: string;
  jobTitle: string;
  companyLogoUrl?: string;
}

export interface CompanyBase {
  id: string;
  companyName: string;
  fullName: string;
  jobTitle: string;
}

export interface CompanyB2B {
  name: string;
  domain: string;
  logo: string;
  companyId: string | null;
  companyName: string;
  companyDomain: string;
  companyLogo: string;
}

// IDs of the templates that the MCP can use to tell them apart
export type WidgetId =
  | "people-base"
  | "companies-base"
  | "companies-b2b";