import { ActionsEnum } from './constants';
import ActionType from '../../../models/ActionType';

export default class FeedActions {

    static loadFeedRequest(): ActionType {
        return {
            type: ActionsEnum.LOAD_COURSES_REQUEST
        }
    }

    static loadFeedSuccess({ courses }): ActionType {
        return {
            type: ActionsEnum.LOAD_COURSES_SUCCESS,
            payload: { courses }
        }
    }

    static loadFeedFailure(error): ActionType {
        return {
            type: ActionsEnum.LOAD_COURSES_FAILURE,
            payload: { error }
        }
    }

}
