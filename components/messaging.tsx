import React from "react";
import MessagingTab from "@/widgets/messagingTabs";
import { data } from "@/data/data";
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
          {data.map((item) => (
            <MessagingTab
              icons={item.icons}
              head={item.title}
              text={item.description}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messaging;
