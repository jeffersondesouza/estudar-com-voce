import * as React from 'react';

import './styles/styles.scss';
import { Course } from '../../models/Course';


export interface IProps {
  course: Course
}

export const CourseComponent = (props: IProps) => {
  const { course } = props;
  return (
    <div className="course">
      <div className="course__header">
        <h3>{course.name}</h3>
      </div>
      <div className="course__footer">
        <div>Novo</div>
      </div>
    </div>
  );
};
