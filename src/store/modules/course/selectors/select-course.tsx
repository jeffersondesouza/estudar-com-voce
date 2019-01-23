import { Course } from '../../../../models';


export const selectCourse = (id: number, courses: Course[]): Course =>
  courses.find(course => +course.id === id);
