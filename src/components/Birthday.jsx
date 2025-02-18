import React from "react";
import { Card } from "react-bootstrap";

const Birthdays = () => {
  return (
    <Card className="p-3 text-center shadow">
      <h5>Birthdays and Anniversaries - November</h5>
      <img src="/Cake.png" alt="Cake" className="mb-2"/>
      <p>No Birthdays or Work Anniversaries This Month</p>
    </Card>
  );
};

export default Birthdays;
