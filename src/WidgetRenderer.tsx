import React from "react";
import { widgetRegistry } from "./widgets/registry";
import type { WidgetId } from "./widgets/types";
import { PeopleBaseWidget } from "./widgets/WidgetPeopleBase";

interface WidgetRendererProps {
  templateId?: WidgetId | string;
  data: any;
  theme?: string;
}

export const WidgetRenderer: React.FC<WidgetRendererProps> = ({
  data = null, theme = '',
}) => {
  return <PeopleBaseWidget data={data} theme={theme} /> /*<Component data={data} />*/;
};
