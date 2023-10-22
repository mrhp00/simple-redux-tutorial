import { useSelector, useDispatch } from "react-redux";
import { increaseByOne, decreaseByOne, setTo } from "./counterSliceStore";

import { Row, Col, Button, Form, ButtonGroup } from "react-bootstrap";
import { useState } from "react";

export default function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()
  const [cunstomAmount, setCustomAmount] = useState();



  return (
    <>
      <Row>
        <Col />
        <Col>
          <div className="text-center mt-5 pb-5">
            <h1>{counter}</h1>
          </div>
          <Form>
            <Form.Label>Set custome amount to REDUX</Form.Label>
            <Form.Control
              type="text"
              onChange={(element) => {
                setCustomAmount(element.currentTarget.value);
              }}
            />
          </Form>
          <div className=" text-center d-grid mt-3">
            <ButtonGroup>
              <Button variant="success" onClick={()=>{dispatch(increaseByOne())}}>Add (+1)</Button>
              <Button variant="primary" className="px-1" onClick={()=>{
                if (cunstomAmount) {
                  dispatch(setTo(parseInt(cunstomAmount)))
                }
              }}>
                Custom amount
              </Button>
              <Button variant="danger" onClick={()=>{dispatch(decreaseByOne())}}>Sub (-1)</Button>
            </ButtonGroup>
          </div>
        </Col>
        <Col />
      </Row>
    </>
  );
}
