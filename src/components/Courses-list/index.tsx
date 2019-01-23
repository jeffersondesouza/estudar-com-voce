import * as React from 'react';

import './styles/styles.scss';
import { Course } from '../../models/Course';
import { CourseComponent } from '../Course';


export interface IProps {
  courses: Course[];
  title: string
}

export const CoursesList = (props: IProps) => (
  <div className="courses">
    <h2 className="title courses__title">{props.title}</h2>
    <ul className="courses__list">
      {
        props.courses.map(course => (
          <li key={course.id} className="courses__list-item">
            <CourseComponent course={course} />
          </li>
        ))
      }
    </ul>
  </div>
);
