import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { deletePizza, getAllPizzas } from "../../actions/pizzaAction";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { Link } from "react-router-dom";

const Pizzalist = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error>Error while fetching data {error}</Error>
      ) : (
        <div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Image</th>
                <th>Pizza Name</th>
                <th>Prices Name</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pizzas &&
                pizzas.map((pizza) => (
                  <tr key={pizza._id}>
                    <td>
                      <img
                        src={pizza.image}
                        alt="logo"
                        width="100px"
                        height="70px"
                      />
                    </td>
                    <td>{pizza.name}</td>
                    <td>
                      Small : {pizza.prices[0]["small"]}
                      <br />
                      Medium : {pizza.prices[0]["medium"]}
                      <br />
                      Large : {pizza.prices[0]["large"]}
                    </td>
                    <td>{pizza.category}</td>
                    <td>
                      <Link to={`/admin/editpizza/${pizza._id}`}>
                        <AiFillEdit style={{ cursor: "pointer" }} />
                      </Link>
                      &nbsp;
                      <AiFillDelete
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => {
                          dispatch(deletePizza(pizza._id));
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default Pizzalist;
