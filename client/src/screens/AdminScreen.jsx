import React, { useEffect, useState } from "react";
import { Row, Col, Container, ButtonGroup, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Userlist from "../components/Admin/Userlist";
import Pizzalist from "../components/Admin/Pizzalist";
import AddNewPizza from "../components/Admin/AddNewPizza";
import OrderList from "../components/Admin/OrderList";

const AdminScreen = () => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const [selectedComponent, setSelectedComponent] = useState("userlist");
  

  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      setSelectedComponent(null);
    }
  }, [currentUser]);

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "userlist":
        return <Userlist />;
      case "pizzalist":
        return <Pizzalist />;
      case "addnewpizza":
        return <AddNewPizza />;
      case "orderlist":
        return <OrderList />;
      default:
        return <Userlist />;
    }
  };

  return (
    <Container>
      <Row>
        <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
        <Col md={2}>
          <ButtonGroup vertical style={{ minHeight: "400px" }}>
            <Button onClick={() => setSelectedComponent("userlist")}>
              All Users
            </Button>
            <Button onClick={() => setSelectedComponent("pizzalist")}>
              All Pizzas
            </Button>
            <Button onClick={() => setSelectedComponent("addnewpizza")}>
              Add New Pizza
            </Button>
            <Button onClick={() => setSelectedComponent("orderlist")}>
              All Orders
            </Button>
          </ButtonGroup>
        </Col>
        <Col md={10}>
          {selectedComponent && renderSelectedComponent()}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminScreen;
