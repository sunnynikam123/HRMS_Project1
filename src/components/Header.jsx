import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaRegBuilding } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: "#6545CA", height: "105px", position: "relative" }} variant="dark" expand="lg">
      <Container>
       
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "absolute", top: "5px", left: "20px" }}>
          <img src="/image.png" alt="Logo" style={{ width: "50px", height: "51px" }} />
          <span className="text-white" style={{ fontSize: "16px", fontFamily: "'Intern', sans-serif", marginTop: "5px" }}>
            My HRMS
          </span>
        </div>

        <Nav className="ms-auto d-flex align-items-center">
          <Nav.Link href="#" className="text-white d-flex align-items-center">
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                overflow: "hidden",
                marginRight: "10px",
              }}
            >
              <img
                src="/image1.png" 
                alt="User"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
           <p style={{width:"106px", marginTop:"11px", font:"Manrope"}}> My Profile</p>
          </Nav.Link>

          <Nav.Link href="#" className="text-white d-flex align-items-center" style={{ marginLeft: "20px", marginRight:"23px" }}>
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                overflow: "hidden",
                marginRight: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaRegBuilding style={{ width: "18px", height: "18px", color: "#fff" }} />
            </div>
            Time Sheet
          </Nav.Link>

          <Nav.Link href="#" className="text-white" style={{ marginLeft: "20px" }}>
            <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              overflow: "hidden",
              marginRight: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }} >
              <icon ></icon>
            Income Tax</div ></Nav.Link>
          <Nav.Link href="#" className="text-white" style={{ marginLeft: "20px" }}>Attendance & Leaves</Nav.Link>
          <Nav.Link href="#" className="text-white" style={{ marginLeft: "20px" }}>Leaves</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
