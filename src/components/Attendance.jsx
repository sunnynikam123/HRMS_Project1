import React from "react";
import { Card, Button } from "react-bootstrap";

const Attendance = () => {
  return (
    <Card className="p-3 shadow">
      <h5>Attendance</h5>
      <p>09:15 AM - 00:00</p>
      <span style={{}}>Clock In</span>
      <span style={{marginLeft:"350px"}}>Clock out</span>
      
      <p className="text-muted mt-2">Shift time left: 03:56:15</p>
    </Card>
  );
};

export default Attendance;
