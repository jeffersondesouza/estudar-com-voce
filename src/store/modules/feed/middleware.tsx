import Actions from './action';
import axios from 'axios';

export default class FeedMidleware {

    static loadFeedRequest() {
        return dispatch => {
            dispatch(Actions.loadFeedRequest());
            axios.get('https://raw.githubusercontent.com/estudarcomvoce/frontend-challenge/master/assets/courses.json')
                .then(res => res.data)
                .then(team => dispatch(Actions.loadFeedSuccess(team)))
                .catch(error => dispatch(Actions.loadFeedFailure({ error })));
        };
    }

}