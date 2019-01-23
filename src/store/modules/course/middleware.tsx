import Actions from './actions';
import coursesApi from '../../api/courses-api';


export default class FeedMidleware {

    static loadCoursesRequest() {
        return dispatch => {
            dispatch(Actions.loadCoursesRequest());


            return coursesApi.loadCourses()
                .then(courses => dispatch(Actions.loadCoursesSuccess({ courses })))
                .catch(error => dispatch(Actions.loadCoursesFailure({ error })));
        };
    }


    static loadCourse(id: number) {
        return dispatch => {
            dispatch(Actions.loadCourseRequest({ id }));
            return coursesApi.loadCourses()
                .then(course => dispatch(Actions.loadCourseSuccess({ course })))
                .catch(error => dispatch(Actions.loadCourseFailure({ error })));
        };
    }

}