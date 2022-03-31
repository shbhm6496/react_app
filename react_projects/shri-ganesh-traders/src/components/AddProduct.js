import React from "react";
import { Form, Button } from "react-bootstrap";
const AddProduct = (props) => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Prodect Name</Form.Label>
        <Form.Control type="text" placeholder="Entre the Product name...." />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Capacity</Form.Label>
        <Form.Control type="Number" placeholder="Entre the Product name...." />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Entre the Product name...." />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Measurement</Form.Label>
        <Form.Control type="text" placeholder="Entre the Product name...." />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Entre the Product name...." />
      </Form.Group>
      <Button variant="Primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default AddProduct;
