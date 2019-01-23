
import * as selectos from './selectors';
import { selectCourse } from './selectors/select-course';

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
			console.log('selectedCourse', action.payload);

			return {
				...state,
				selectedCourse: null,
				selectedCourseId: action.payload,
				isLoadingCourse: true,
			}

		case ActionsEnum.LOAD_COURSE_SUCCESS:

			const selectedCourse = selectCourse(state.selectedCourseId, action.payload);

			return {
				...state,
				selectedCourse: selectedCourse,
				isLoadingCourse: false,
				error: null
			}

		case ActionsEnum.LOAD_COURSES_FAILURE:
			return {
				...state,
				isLoadingCourse: false,
				error: { ...action.payload.error }
			}



		case ActionsEnum.FILTER_COURSES:
			const courseFilter = {
				...state.courseFilter,
				[action.payload.name]: action.payload.value
			};

			console.log(courseFilter, state.courses);



			return {
				...state,
				customCourses: selectos.filterCustomCourses(state.courses),
				genericCourses: selectos.filterGenericCourses(state.courses),
				courseFilter,
			}

		default:
			return state;
	}
}


export default feedReducer;
