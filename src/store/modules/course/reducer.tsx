
import * as selectos from './selectors';
import { IState, InitialState } from './state'
import ActionType from '../../../models/ActionType';


import { ActionsEnum } from './constants';


function feedReducer(state = InitialState, action: ActionType): IState {

	switch (action.type) {

		case ActionsEnum.LOAD_COURSES_REQUEST:
			return {
				...state,
				courses: [],
				customCourses: [],
				genericCourses: [],
				isLoadingCourses: true,
			}

		case ActionsEnum.LOAD_COURSES_SUCCESS:

			return {
				...state,
				courses: [...action.payload.courses],
				customCourses: selectos.filterCustomCourses(action.payload.courses),
				genericCourses: selectos.filterGenericCourses(action.payload.courses),
				isLoadingCourses: false,
				error: null
			}

		case ActionsEnum.LOAD_COURSES_FAILURE:
			return {
				...state,
				isLoadingCourses: false,
				error: { ...action.payload.error }
			}




		case ActionsEnum.LOAD_COURSE_REQUEST:
			return {
				...state,
				selectedCourse: null,
				selectedCourseId: action.payload.id,
				isLoadingCourse: true,
			}

		case ActionsEnum.LOAD_COURSE_SUCCESS:

			return {
				...state,
				selectedCourse: action.payload.course,
				isLoadingCourse: false,
				error: null
			}

		case ActionsEnum.LOAD_COURSES_FAILURE:
			return {
				...state,
				isLoadingCourse: false,
				error: { ...action.payload.error }
			}


		default:
			return state;
	}
}


export default feedReducer;
