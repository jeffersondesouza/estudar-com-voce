import * as Action from './constants';

export default class FeedActions {

    static loadFeedRequest() {
        return {
            type: Action.LOAD_FEED_REQUEST
        }
    }

    static loadFeedSuccess(team) {
            console.log(team);
            
        return {
            type: Action.LOAD_FEED_SUCCESS,
            payload: { team }
        }
    }

    static loadFeedFailure(error) {
        return {
            type: Action.LOAD_FEED_FAILURE,
            payload: { error }
        }
    }

}