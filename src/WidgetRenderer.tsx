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
  /*const Component = widgetRegistry[templateId];
  if (!Component) {
    return (
      <div style={{ padding: 16, color: "red" }}>
        Unknown widget: {templateId}
      </div>
    );
  }*/

  return <PeopleBaseWidget data={data} theme={theme} /> /*<Component data={data} />*/;
};
