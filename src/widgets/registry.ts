// src/widgets/registry.ts
import type { WidgetId } from "./types";
import type { JSX } from "react";
import { PeopleBaseWidget } from "./WidgetPeopleBase";
import { CompaniesBaseWidget } from "./WidgetCompaniesBase";
import { CompaniesB2BWidget } from "./WidgetCompaniesB2B";

export const widgetRegistry: Record<WidgetId, React.ComponentType<any>> = {
  // WidgetId from types : React component
  "people-base": PeopleBaseWidget,
  "companies-base": CompaniesBaseWidget,
  "companies-b2b": CompaniesB2BWidget,
};
