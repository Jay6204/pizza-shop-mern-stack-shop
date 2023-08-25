import React, { useEffect } from "react";
import { getUserOrders } from "../actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import Error from "../components/Error";

const OrderScreen = () => {
  const orderState = useSelector((state) => state.getUserOrdersReducer);
  const { loading, error, orders } = orderState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]); // Empty dependency array to run the effect only once

  return (
    <div>
      <h1 className="text-center">Your Orders</h1>
      {loading && <Loader />}
      {error && <Error />}
      {orders &&
        orders.map((order, index) => ( // Added 'index' as a key for the outer map
        <div className="container border p-4 bg-light" key={order.id}>
          <Row key={index}> {/* Added 'key' attribute */}
            <Col md={4} className="container">
                <h4>Your Items</h4>
              {order.orderItems.map((item, itemIndex) => ( // Added 'itemIndex' as a key for the inner map
                <div key={itemIndex}> {/* Added 'key' attribute */}
                  <h5>
                    {item.name} [{item.varient}] * {item.quantity} = {item.price}
                  </h5>
                </div>
              ))}
            </Col>
            <Col md={4}>
                <h4>Address</h4>
                <h6>Street : {order.shippingAddress.street}</h6>
                <h6>City : {order.shippingAddress.city}</h6>
                <h6>PinCode : {order.shippingAddress.pincode}</h6>
                <h6>Country : {order.shippingAddress.country}</h6>
            </Col>
            <Col md={4}>
                <h4>Order Info</h4>
                <h5>Order Amount : {order.orderAmount}</h5>
                 <h6>Order id : {order._id}</h6>
            </Col>
            
          </Row>
          </div>
        ))}
    </div>
  );
};

export default OrderScreen;
