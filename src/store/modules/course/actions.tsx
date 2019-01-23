import { ActionsEnum } from './constants';
import ActionType from '../../../models/ActionType';

export default class FeedActions {

    static loadCoursesRequest(): ActionType {
        return {
            type: ActionsEnum.LOAD_COURSES_REQUEST
        }
    }

    static loadCoursesSuccess({ courses }): ActionType {
        return {
            type: ActionsEnum.LOAD_COURSES_SUCCESS,
            payload: { courses }
        }
    }

    static loadCoursesFailure(error): ActionType {
        return {
            type: ActionsEnum.LOAD_COURSES_FAILURE,
            payload: { error }
        }
    }

    static loadCourseRequest({ id }): ActionType {
        return {
            type: ActionsEnum.LOAD_COURSE_REQUEST,
            payload: id 
        }
    }

    static loadCourseSuccess({ course }): ActionType {
        return {
            type: ActionsEnum.LOAD_COURSE_SUCCESS,
            payload: course
        }
    }

    static loadCourseFailure(error): ActionType {
        return {
            type: ActionsEnum.LOAD_COURSE_FAILURE,
            payload: { error }
        }
    }

}
