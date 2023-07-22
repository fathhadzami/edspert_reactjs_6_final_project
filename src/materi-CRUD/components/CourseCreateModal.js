import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const CourseCreateModal = ({ show, handleClose, handleSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submitData = () => {
    const submitPayload = {
      id: Math.floor(Date.now()/1000),
      title: title,
      description: description,
    }

    handleSubmit(submitPayload);
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Course</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Course Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter course name"
              onChange={(e) => setTitle(e.target.value)}
              />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as={'textarea'}
              type="text"
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
              />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={submitData}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CourseCreateModal;
