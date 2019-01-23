import * as React from 'react';
import { connect } from 'react-redux';

import './style/style.scss';
import FeedMidleware from '../../store/modules/course/middleware';

import { Search } from '../../components/Search';
import { CoursesList } from '../../components/Courses-list';
import { Course } from '../../models/Course';


export interface IProps {
  dispatchloadCourses(): void,
  genericCourses?: Course[]
  customCourses?: Course[]
}

export class CoursesContainer extends React.Component<IProps> {

  componentDidMount() {
    this.props.dispatchloadCourses();
  }

  render() {
    const { genericCourses, customCourses } = this.props;
    
    return (
      <div className="courses-block">
        <Search />
        <CoursesList courses={customCourses || []} title="Materias Personalizadas sem faculdade" />
        <CoursesList courses={genericCourses || []} title="Materias Gerais" />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.course,
});

const mapDispatchToProps = dispatch => ({
  dispatchloadCourses: () => dispatch(FeedMidleware.loadCoursesRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer);
