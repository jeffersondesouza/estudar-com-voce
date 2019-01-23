import * as React from 'react';

import './styles/styles.scss';
import { Course } from '../../models/Course';
import { CourseComponent } from '../Course';


export interface IProps {
  courses: Course[]
}

export const CoursesList = (props: IProps) => (
  <ul className="courses-list">
    {
      props.courses.map(course => (
        <li key={course.id}>
          <CourseComponent course={course} />
        </li>
      ))
    }
  </ul>
);
