import React, { useState} from "react";

import { useDispatch } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";
import { filterPizza } from "../actions/pizzaAction";
const Filters = () => {
  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");
  const dispatch = useDispatch();

  return (
    <div className="p-3 bg-info mt-2">
      
      <Form>
        <Row>
          <Col>
            <Form.Control
              value={searchkey}
              onChange={(e) => setsearchkey(e.target.value)}
              placeholder="search pizza"
            />
          </Col>
          <Col>
            <Form.Select
              value={category}
              onChange={(e) => setcategory(e.target.value)}
            >
              <option key="all">All</option>
              <option key="veg">veg</option>
              <option key="nonveg">nonveg</option>
            </Form.Select>
          </Col>
          <Col>
            <Button
              onClick={() => {
                dispatch(filterPizza(searchkey, category));
              }}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};


export default Filters;
