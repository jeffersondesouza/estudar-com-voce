import * as React from 'react';
import { connect } from 'react-redux';

import './style/style.scss';

import FeedMidleware from '../../store/modules/feed/middleware';


export interface IProps {
  dispatchLoadCourse(): void
}

export class CourseDetailsContainer extends React.Component<IProps> {

  componentDidMount() {
    this.props.dispatchLoadCourse();
  }

  render() {
    const course = MOCK;
    return (
      <div className="details">
        <h2 className="title details__title">
          {course.name}
          {course.highlight && <span className="details__highlight">(novo)</span>}
        </h2>
        <p className="details__description">{course.description}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.feed,
});

const mapDispatchToProps = dispatch => ({
  dispatchLoadCourse: () => dispatch(FeedMidleware.loadFeedRequest()),
});



export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailsContainer);



const MOCK = {
  "id": 1,
  "name": "Física II",
  "description": "Curso remasterizado e criado inteiramente baseado na sua graduação da POLI USP. Provas passadas resolvidas, teoria explicadinha e muitos exercícios extra. Aproveite!",
  "generic": false,
  "highlight": true
}
