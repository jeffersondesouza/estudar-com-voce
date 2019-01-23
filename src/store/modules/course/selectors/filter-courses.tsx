import { Course } from '../../../../models';

export const filterCourses = (filter: { type: string, course: string }, courses: Course[]) =>
  courses.filter(course => course);