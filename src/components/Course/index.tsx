import * as React from 'react';

import './styles/styles.scss';
import { Course } from '../../models/Course';


export interface IProps {
  course: Course
}

export const CourseComponent = (props: IProps) => {
  const { course } = props;
  const classNameHeader = course.generic ? 'course__header' : 'course__header course__header--generic';
  return (
    <div className="course">
      <div className={classNameHeader}>
        <h3>{course.name}</h3>
      </div>
      <div className="course__footer">
        <div className="course__highlight">{course.highlight && 'Novo!'}</div>
      </div>
    </div>
  );
};
