import React from "react";
import { Card, Badge } from "react-bootstrap";

const PeopleOnLeave = () => {
  return (
    <Card className="p-3 shadow">
      <h5>People on Leave Today</h5>
      <p><strong>Ashutosh Sharma</strong> <Badge bg="success">Approved</Badge></p>
      <p><strong>Aman Singh</strong> <Badge bg="warning">Applied</Badge></p>
    </Card>
  );
};

export default PeopleOnLeave;
