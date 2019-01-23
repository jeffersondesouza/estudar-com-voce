import { Course } from "../../../models/Course";

export interface IState {
    error: any,
    courses: Course[],
    genericCourses: Course[],
    customCourses: Course[],
    selectedCourseId: number | null,
    selectedCourse: Course | null,
    isLoadingCourses: boolean,
    isLoadingCourse: boolean,
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
}
