
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import CoursesContainer from './containers/CoursesContainer';
import CourseDetailsContainer from './containers/CourseDetailsContainer';

import { Header } from './components/Header';

/* 
import TimelineContainer from './containers/Timeline';
import Header from './components/layout/Header';
 */
export default class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header showSearch={true} />
        <Switch>
          <Route exact path="/courses" component={CoursesContainer} />
          <Route exact path="/courses/:id" component={CourseDetailsContainer} />
          <Route path="**" render={() => (<Redirect to="/courses" />)} />
        </Switch>
      </React.Fragment>
    );
  }
}

