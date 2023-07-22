import { Button, Col, Container, Row, Table } from "react-bootstrap";
import CourseCreateModal from "./components/CourseCreateModal";
import { useEffect, useState } from "react";
import courseService from "./utils/service";

const MateriCRUD = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [courses, setCourses] = useState([]);

  const toggleCreateModal = () => {
    setShowCreateModal(!showCreateModal);
  }

  const handleAddCourse = (payload) => {
    courseService.addCourse(payload);
    toggleCreateModal();
    fetchCourses();
  }

  const fetchCourses = () => {
    const result = courseService.getCourses();
    setCourses(result.data);
    console.log({ result });
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  return <div>
    <Container style={{ marginTop: "48px" }}>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Button onClick={toggleCreateModal} className="mb-3">Add</Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {
                courses.length === 0
                  ? <tr><td colSpan={4} style={{ textAlign: "center" }}>Empty Data</td></tr>
                  : courses.map((course, index) => {
                    return (
                      <tr key={course.id}>
                        <td>{index + 1}</td>
                        <td>{course.title}</td>
                        <td>{course.description}</td>
                        <td></td>
                      </tr>
                    )
                  })
              }
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
    <CourseCreateModal
      show={showCreateModal}
      handleClose={toggleCreateModal}
      handleSubmit={handleAddCourse}
    />
  </div>;
};

export default MateriCRUD;
