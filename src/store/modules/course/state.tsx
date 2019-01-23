import { Course } from "../../../models/Course";

export interface IState {
    error: any,
    courses: Course[],
    genericCourses: Course[],
    customCourses: Course[],
    selectedCourseId: any,
    selectedCourse: Course | null,
    isLoadingCourses: boolean,
    isLoadingCourse: boolean,
    courseFilter: { type: string, course: string }
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
    courseFilter: { type: 'generic', course: '' }
}
