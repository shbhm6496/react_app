import React from "react";
import { Button, Form } from "react-bootstrap";
const AddCategory = (props) => {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Enter the Category</Form.Label>
          <Form.Control type="text" placeholder="Enter the Category......" />
        </Form.Group>
        <Button
          type="submit"
          style={{ marginLeft: "80%", marginTop: "10%", marginRight: "10%" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default AddCategory;
