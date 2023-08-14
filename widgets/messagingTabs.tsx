import React from "react";

const MessagingTab: React.FC<{ head: string; text: string }> = (props) => {
  return (
    <div className="messaging__tab">
      <h2>Easier Work Organization</h2>
      <p>
        Efficiently unleash cross-media information without cross-media value.
        Quickly timely deliverables for real-time schemas.{" "}
      </p>
      <p>Learn more </p>
    </div>
  );
};
export default MessagingTab;
