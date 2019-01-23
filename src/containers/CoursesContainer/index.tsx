import * as React from 'react';
import { connect } from 'react-redux';

import './style/style.scss';
import FeedMidleware from '../../store/modules/course/middleware';

import { Search } from '../../components/Search';
import { CoursesList } from '../../components/Courses-list';
import { Course } from '../../models/Course';


export interface IProps {
  dispatchloadCourses(): any,
  dispatchFilterCourses(filter): any,
  isLoadingCourses: boolean
  genericCourses: Course[]
  customCourses: Course[]
}

export class CoursesContainer extends React.Component<IProps> {

  componentDidMount() {
    this.props.dispatchloadCourses();
  }

  handleFilterCourses = (event) => {
    event.persist();
    const target = event.target;
    const name = target.name;

    const value = (target.type === 'checkbox')
      ? target.checked
      : target.value;


    this.props.dispatchFilterCourses({
      name,
      value,
    });


  }

  render() {
    const { genericCourses, customCourses, isLoadingCourses } = this.props;

    return (
      <div className="courses-block">
        <Search onFilter={this.handleFilterCourses} />
        {!isLoadingCourses &&
          < CoursesList courses={customCourses} title="Materias Personalizadas sem faculdade" />
        }
        {!isLoadingCourses &&
          <CoursesList courses={genericCourses} title="Materias Gerais" />
        }
        {/* <CoursesList courses={ResMock.filter(c => !c.generic)} title="Materias Gerais" /> */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.course,
});

const mapDispatchToProps = dispatch => ({
  dispatchloadCourses: () => dispatch(FeedMidleware.loadCoursesRequest()),
  dispatchFilterCourses: (filter) => dispatch(FeedMidleware.filterCourses(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer);


