import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './style/style.scss';

import CourseMidleware from '../../store/modules/course/middleware';
import { selectCourse } from '../../store/modules/course/selectors';
import { Course } from '../../models';


export interface IProps {
  dispatchLoad(id: number): void,
  match: any,
  selectedCourse: Course | null,
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
          <div>
            <h2 className="title details__title">
              {selectedCourse.name}
              {selectedCourse.highlight && <span className="details__highlight">(novo)</span>}
            </h2>
            <p className="details__description">{selectedCourse.description}</p>
          </div>
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

const MOCK = {
  "id": 1,
  "name": "Física II",
  "description": "Curso remasterizado e criado inteiramente baseado na sua graduação da POLI USP. Provas passadas resolvidas, teoria explicadinha e muitos exercícios extra. Aproveite!",
  "generic": false,
  "highlight": true
}
