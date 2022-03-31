import React from "react";
import { Form } from "react-bootstrap";

const Add_Data = (props) => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Select Category</Form.Label>
          <Form.Select>
            <option>Select The Category</option>
            <option></option>
          </Form.Select>
        </Form.Group>
      </Form>
    </div>
  );
};
export default Add_Data;
