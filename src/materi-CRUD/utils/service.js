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

const updateCourse = (courseId, payload) => {
  const courses = storageManager.get();
  const updatedCourse = courses.map((item) => {
    if (item.id === courseId) {
      return {
        ...item,
        ...payload,
      };
    }
    return item;
  });

  storageManager.set(updatedCourse);
  return {
    data: payload,
  }
}

const deleteCourse = (courseId) => {
  const courses = storageManager.get();
  const newCourses = courses.filter((item) => item.id !== courseId);
  storageManager.set(newCourses);
}

const courseService = {
  addCourse,
  getCourses,
  updateCourse,
  deleteCourse,
};

export default courseService;
