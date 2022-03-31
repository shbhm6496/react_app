import { Modal } from "bootstrap";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const login_modal = () => {
  const [modalState, setmodalSate] = useState(true);
  const showModal = () => setmodalSate(true);
  const closeModal = () => setmodalSate(false);
  return (
    <div>
      <Button onClick={showModal}>Open</Button>
      <Button onClick={closeModal}>Close</Button>
      <Modal show={modalState} style={{ color: "black" }}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
      </Modal>
    </div>
  );
};
export default login_modal;
