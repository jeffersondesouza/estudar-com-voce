import { Course, CourseFilter } from "../../../models";

export interface IState {
    error: any,
    courses: Course[],
    genericCourses: Course[],
    customCourses: Course[],
    selectedCourseId: any,
    selectedCourse: Course | null,
    isLoadingCourses: boolean,
    isLoadingCourse: boolean,
    courseFilter: CourseFilter
}


export const InitialState: IState = {
    error: null,
    courses: [],
    genericCourses: [],
    customCourses: [],
    selectedCourse: null,
    isLoadingCourses: false,
    isLoadingCourse: false,
    selectedCourseId: null,
    courseFilter: { type: 'all', course: '' }
}
