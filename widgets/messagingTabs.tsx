import React from "react";

const MessagingTab: React.FC<{ head: string; icons: string; text: string }> = (
  props
) => {
  return (
    <div className="messaging__tab">
      <div className="messaging__tab-icon"></div>
      <h2>Easier Work Organization</h2>
      <p>
        Efficiently unleash cross-media information without cross-media value.
        Quickly timely deliverables for real-time schemas.{" "}
      </p>
      <div className="messaging__tab-link">Learn more </div>
    </div>
  );
};
export default MessagingTab;
