import { ActionsEnum } from './constants';
import ActionType from '../../../models/ActionType';

export default class FeedActions {

    static loadFeedRequest(): ActionType {
        return {
            type: ActionsEnum.LOAD_FEED_REQUEST
        }
    }

    static loadFeedSuccess(team): ActionType {
        return {
            type: ActionsEnum.LOAD_FEED_SUCCESS,
            payload: { team }
        }
    }

    static loadFeedFailure(error): ActionType {
        return {
            type: ActionsEnum.LOAD_FEED_FAILURE,
            payload: { error }
        }
    }

}
