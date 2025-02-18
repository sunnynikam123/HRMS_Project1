import React from "react";
import { Card } from "react-bootstrap";

const Leaves = () => {
  return (
    <Card className="p-3 shadow">
      <h5>Leaves</h5>
      <p>Annual Leave: 12.00 / 24.00</p>
      <p>Sick Leave: 0.00 / 0.00</p>
      <a href="#">Leave Entitlement</a>
    </Card>
  );
};

export default Leaves;
