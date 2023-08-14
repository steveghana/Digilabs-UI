import React from "react";
import MessagingTab from "@/widgets/messagingTabs";
const Messaging = () => {
  return (
    <div className="messaging__container">
      <div className="messaging__wrapper">
        <div className="messaging__header">
          <h1>Message for all</h1>
          <p>
            User generated content in real-time will have multiple touchpoints
            for offshoring
          </p>
        </div>
        <div className="messaging__Tabs">
          {Array.from({ length: 8 }).map((_, itemIdx) => (
            <MessagingTab head="" text="" key={itemIdx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messaging;
