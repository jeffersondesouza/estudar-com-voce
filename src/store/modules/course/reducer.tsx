
import { IState, InitialState } from './state'

import { ActionsEnum } from './constants';
import ActionType from '../../../models/ActionType';


function feedReducer(state = InitialState, action: ActionType): IState {

	switch (action.type) {

		case ActionsEnum.LOAD_COURSES_REQUEST:
			return {
				...state,
				courses: [],
				isLoadingCourses: true,
			}

		case ActionsEnum.LOAD_COURSES_SUCCESS:

			return {
				...state,
				courses: [...action.payload.courses],
				isLoadingCourses: false,
				error: null
			}

		case ActionsEnum.LOAD_COURSES_FAILURE:
			return {
				...state,
				isLoadingCourses: false,
				error: { ...action.payload.error }
			}

		default:
			return state;
	}
}


export default feedReducer;
