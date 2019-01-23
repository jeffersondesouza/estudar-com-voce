import Actions from './actions';
import coursesApi from '../../api/courses-api';


export default class FeedMidleware {

    static loadFeedRequest() {
        return dispatch => {
            dispatch(Actions.loadFeedRequest());


            return coursesApi.loadCourses()
                .then(courses => dispatch(Actions.loadFeedSuccess({ courses })))
                .catch(error => dispatch(Actions.loadFeedFailure({ error })));
        };
    }

}