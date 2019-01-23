import { Course, CourseFilter } from '../../../../models';


const filterByType = (type: string) => (course: Course) => {
  if (type === 'generic') {
    return course.generic;
  }
  if (type === 'custom') {
    return !course.generic;
  }
  return course;
}

const filterByCourse = (name: string) => (course: Course) => {
  return course.name.toLowerCase().includes(name.toLowerCase());

}

export const filterCourses = (filter: CourseFilter, courses: Course[]) =>
  courses
  .filter(filterByType(filter.type))
  .filter(filterByCourse(filter.course));