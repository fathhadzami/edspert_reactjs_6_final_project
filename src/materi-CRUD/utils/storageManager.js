// data example
// const courses = [
//   {
//     id: 1,
//     title: 'Course 1',
//     description: 'description course 1',
//   }
// ];

const storageKey = 'reactJsBatch6';

const setItem = (value) => {
  const valueToString = JSON.stringify(value);
  localStorage.setItem(storageKey, valueToString);
}

const getItem = () => {
  const data = localStorage.getItem(storageKey);
  if (data) {
    return JSON.parse(data);
  }
  return [];
}

const storageManager = {
  set: setItem,
  get: getItem,
}

export default storageManager;
