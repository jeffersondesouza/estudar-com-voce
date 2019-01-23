import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './style/style.scss';

import CourseMidleware from '../../store/modules/course/middleware';
import { selectCourse } from '../../store/modules/course/selectors';
import { Course } from '../../models';
import { CourseDetails } from '../../components/CourseDetails';


export interface IProps {
  dispatchLoad(id: number): void,
  match: any,
  selectedCourse: Course,
  isLoadingCourse: boolean,
}

export class CourseDetailsContainer extends React.Component<IProps> {

  componentDidMount() {

    this.props.dispatchLoad(+this.props.match.params.id);
  }

  render() {
    const { selectedCourse, isLoadingCourse } = this.props;
    
    return (
      <div className="details">
        <div>
          <Link to="/cocurses" className="details__back">&larr;</Link>
        </div>
        {(!isLoadingCourse && selectedCourse) &&
          <CourseDetails course={selectedCourse} />
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.course,
});

const mapDispatchToProps = dispatch => ({
  dispatchLoad: (id: number) => dispatch(CourseMidleware.loadCourse(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailsContainer);
