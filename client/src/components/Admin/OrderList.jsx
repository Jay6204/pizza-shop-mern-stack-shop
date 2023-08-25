import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getAllOrders } from "./../../actions/orderAction";
import Loader from "../Loader";
import { Table, Button } from "react-bootstrap";
import Error from "../Error";

const OrderList = () => {
  const allOrdersState = useSelector((state) => state.allUserOrdersReducer);
  const { loading, orders, error } = allOrdersState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);
  return (
    <div>
      <h1>Order Lists</h1>
      {loading && <Loader />}
      {error && <Error error="Error While loading data" />}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.email}</td>
                <td>Rs. {order.orderAmount}/-</td>
                <td>
                  {order.createdAt ? order.createdAt.substring(0, 10) : "N/A"}
                </td>
                <td>
                  {" "}
                  {order.isDelivered ? (
                    <h6 className="text-success">Delivered</h6>
                  ) : (
                    <>
                      <Button
                        className="btn-danger"
                        onClick={() => {
                          dispatch(deliverOrder(order._id));
                        }}
                      >
                        Deliver
                      </Button>
                    </>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderList;
