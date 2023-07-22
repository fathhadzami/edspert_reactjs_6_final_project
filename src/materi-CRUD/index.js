import { Button, Col, Container, Row, Table } from "react-bootstrap";
import CourseCreateModal from "./components/CourseCreateModal";
import { useEffect, useState } from "react";
import courseService from "./utils/service";
import CourseEditModal from "./components/CourseEditModal";
import CourseDeleteModal from "./components/CourseDeleteModal";

const MateriCRUD = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({});

  const toggleCreateModal = () => {
    setShowCreateModal(!showCreateModal);
  };

  const handleAddCourse = (payload) => {
    courseService.addCourse(payload);
    toggleCreateModal();
    fetchCourses();
  };

  const fetchCourses = () => {
    const result = courseService.getCourses();
    setCourses(result.data);
    console.log({result});
  };

  const openEditModal  = (course) => {
    setSelectedCourse(course);
    setShowEditModal(true);
  };

  const closeEditModal  = () => {
    setSelectedCourse({});
    setShowEditModal(false);
  };

  const handleEditCourse = (editPayload) => {
    const {id, ...othersPayload} = editPayload;
    courseService.updateCourse(id, othersPayload);
    closeEditModal();
    fetchCourses();
  }

  const openDeleteModal = (course) => {
    setSelectedCourse(course);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setSelectedCourse({});
    setShowDeleteModal(false);
  };

  const handleDeleteCourse = () => {
    courseService.deleteCourse(selectedCourse.id);
    closeDeleteModal();
    fetchCourses();
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
                        <td>
                          <Button variant="warning" onClick={() => openEditModal(course)}>Edit</Button>
                          {" "}
                          <Button variant="danger" onClick={() => openDeleteModal(course)}>Delete</Button>
                        </td>
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
    <CourseEditModal
      show={showEditModal}
      handleClose={closeEditModal}
      handleSubmit={handleEditCourse}
      data={selectedCourse}
    />
    <CourseDeleteModal
      show={showDeleteModal}
      handleClose={closeDeleteModal}
      onAgree={handleDeleteCourse}
    />
  </div>;
};

export default MateriCRUD;
