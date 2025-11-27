import React from "react";
import { widgetRegistry } from "./widgets/registry";
import type { WidgetId } from "./widgets/types";
import { PeopleBaseWidget } from "./widgets/WidgetPeopleBase";

interface WidgetRendererProps {
  templateId?: WidgetId | string;
  data: any;
}

export const WidgetRenderer: React.FC<WidgetRendererProps> = ({
  templateId = "",
  data = null,
}) => {
  /*const Component = widgetRegistry[templateId];
  if (!Component) {
    return (
      <div style={{ padding: 16, color: "red" }}>
        Unknown widget: {templateId}
      </div>
    );
  }*/

  console.log("widget templateId", templateId);

  return (
    <PeopleBaseWidget
      templateId={templateId}
      data={data}
    /> /*<Component data={data} />*/
  );
};
