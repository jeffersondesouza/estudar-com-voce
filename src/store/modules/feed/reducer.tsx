
import INITIAL_STATE from './state'

import * as ActionTypes from './constants';


function feedReducer(state = INITIAL_STATE, action) {
	switch (action.type) {


		case ActionTypes.LOAD_FEED_REQUEST:
			return {
				...state,
				team: [],
				isLoadingFeed: true,
			}

		case ActionTypes.LOAD_FEED_SUCCESS:

			return {
				...state,
				team: [...action.payload.team],
				isLoadingFeed: false,
				error: null
			}

		case ActionTypes.LOAD_FEED_FAILURE:
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
