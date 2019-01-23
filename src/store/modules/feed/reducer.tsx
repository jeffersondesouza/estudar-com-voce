
import { IState, InitialState } from './state'

import { ActionsEnum } from './constants';
import ActionType from '../../../models/ActionType';


function feedReducer(state = InitialState, action: ActionType) {

	switch (action.type) {

		case ActionsEnum.LOAD_FEED_REQUEST:
			return {
				...state,
				team: [],
				isLoadingFeed: true,
			}

		case ActionsEnum.LOAD_FEED_SUCCESS:

			return {
				...state,
				team: [...action.payload.team],
				isLoadingFeed: false,
				error: null
			}

		case ActionsEnum.LOAD_FEED_FAILURE:
			return {
				...state,
				isLoadingFeed: false,
				error: { ...action.payload.error }
			}

		default:
			return state;
	}
}


export default feedReducer;
