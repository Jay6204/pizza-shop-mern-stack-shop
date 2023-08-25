import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaCircleMinus, FaCirclePlus, FaTrash } from "react-icons/fa6";
import { addToCart, deleteFromCart } from "../actions/cartAction";
import Checkout from "../components/Checkout";

const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((x, item) => x + item.price, 0)

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>My Cart</h1>
            <Row>
              {cartItems.map((Item) => (
                <div key={Item._id}>
                  <Col md={7}>
                    <h5>
                      {Item.name} [{Item.varient}]
                    </h5>
                    <h6>
                      {" "}
                      Price: {Item.quantity} X {Item.prices[0][Item.varient]} ={" "}
                      {Item.price}
                    </h6>
                    <h6>
                      Quantity:&nbsp;
                      <FaCircleMinus
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(Item, Item.quantity - 1, Item.varient)
                          );
                        }}
                      />{" "}
                      &nbsp;
                      {Item.quantity} &nbsp;
                      <FaCirclePlus
                        className="text-success"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(Item, Item.quantity + 1, Item.varient)
                          );
                        }}
                      />
                    </h6>
                  </Col>
                  <Col md={5}>
                    <img
                      alt={Item.name}
                      src={Item.image}
                      style={{ width: "80px", height: "80px" }}
                    />
                    <FaTrash
                    className="text-danger"
                    style={{ cursor: "pointer", marginLeft:'25px'}}
                    onClick={() => {
                      dispatch(
                        deleteFromCart(Item)
                      );
                    }}
                    />
                  </Col>
                  <hr />
                </div>
              ))}
            </Row>
          </Col>
          <Col md={4}>
            <h1>Payment Info</h1>
            <h4>Sub Total</h4>
            <h4> Rs: {subTotal} /- </h4>
            <Checkout subTotal={subTotal}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartScreen;
