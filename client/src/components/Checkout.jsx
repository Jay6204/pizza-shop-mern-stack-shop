import React from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderAction";
import Loader from "./Loader";
import Error from "./Error";
import Success from "./Success";

const Checkout = ({ subTotal }) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;

  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
    console.log(token);
  };
  return (
    <>
      {loading && <Loader />}
      {error && <Error error="something went wrong" />}
      {success && <Success success="oreder placed success" />}{" "}
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51NGGGqSAFlDzEuz3tl6ESXWBJC82g2sleBX0HOPk99dPhgjz8vHaIh4nwcz33hVpIX0h4gjSfv2VaCHGaJaAPIrf00rL8num18"
        currency="INR"
      >
        <Button>Pay Now</Button>
      </StripeCheckout>
      
    </>
  );
};

export default Checkout;
