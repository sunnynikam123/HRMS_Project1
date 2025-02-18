import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaClock, FaFileInvoice, FaClipboardList } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/" className="flex-column">
        <Nav.Link href="#"><FaClock /> Time Sheet</Nav.Link>
        <Nav.Link href="#"><FaFileInvoice /> Income Tax</Nav.Link>
        <Nav.Link href="#"><FaClipboardList /> Attendance & Leaves</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
