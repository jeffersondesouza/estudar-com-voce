import { Course } from '../../../../models';

export const filterCustomCourses = (courses: Course[]) => courses.filter(course => !course.generic);