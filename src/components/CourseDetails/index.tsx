import * as React from 'react';
import { Link } from 'react-router-dom';

import './styles/styles.scss';
import { Course } from '../../models/Course';


export interface IProps {
  course: Course
}

export const CourseDetails = (props: IProps) => {
  const { course } = props;
  return (
    <div>
      <h2 className="title details__title">
        {course.name}
        {course.highlight && <span className="details__highlight">(novo)</span>}
      </h2>
      <p className="details__description">{course.description || 'Este curso não contém nenhuma descrição'}</p>
    </div>
  );
};
