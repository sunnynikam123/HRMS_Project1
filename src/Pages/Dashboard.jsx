import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Attendance from "../components/Attendance";
import Leaves from "../components/Leaves";
import Salary from "../components/Salary";
import Calendar from "../components/Calendar";
import Birthdays from "../components/Birthday";
import PeopleOnLeave from "../components/PeopleOnLeave";
import { BiBold } from "react-icons/bi";

const Dashboard = () => {
  return (
    <div className="Container">
      <h3 style={{ color:"#0A0A0A",lineHeight:"43.71px  "}}>Employee Dashboard</h3>
      <Row>
        <Col md={4}><Attendance /></Col>
        <Col md={4}><Leaves /></Col>
        <Col md={4}><Salary /></Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}><Birthdays /></Col>
        <Col md={6}><PeopleOnLeave /></Col>
      </Row>
      <Row className="mt-3">
        <Col><Calendar /></Col>
      </Row>
    </div>
  );
};

export default Dashboard;
