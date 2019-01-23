import { Course } from '../../../../models';

// export const selectCourse = (id: number, courses: Course[]) => courses[0];


export const selectCourse = (id: number, courses: Course[]) =>
  courses.find(course => +course.id === id);