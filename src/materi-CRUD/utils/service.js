import storageManager from "./storageManager"

// addCourse Payload
// const payload = {
//   id: 1,
//   title: 'Course 1',
//   description: 'description course 1',
// }

const addCourse = (payload) => {
  const currItem = storageManager.get();
  storageManager.set([...currItem, payload]);
};

const getCourses = () => {
  const courses = storageManager.get();
  const response = {
    data: courses !== null ? courses : [],
  }
  return response;
}

const courseService = {
  addCourse,
  getCourses,
};

export default courseService;
