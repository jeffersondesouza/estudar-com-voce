import { Course } from "../../../models/Course";

export interface IState {
    error: null,
    courses: Course[],
    isLoadingCourses: boolean,
}


export const InitialState: IState = {
    error: null,
    courses: [],
    isLoadingCourses: false,
}
