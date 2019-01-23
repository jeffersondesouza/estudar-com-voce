import axios from 'axios';

const baseUrl = 'https://raw.githubusercontent.com/estudarcomvoce/frontend-challenge/master/assets/courses.json';


const loadCourses = () => axios.get(baseUrl)
  .then(res => res.data)
  .catch(err => {
    return err;
  });

const loadCourse = (id: number) => axios.get(baseUrl)
  .then(res => res.data)
  .catch(err => {
    return err;
  });

export default {
  loadCourses,
  loadCourse
}