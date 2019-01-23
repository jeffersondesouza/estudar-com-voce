import { Course } from '../../../../models';

export const filterGenericCourses = (courses: Course[]) => courses.filter(course => course.generic);