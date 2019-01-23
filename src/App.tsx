
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import CoursesContainer from './containers/CoursesContainer';
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
          <Route exact path="/feed" component={CoursesContainer} />
          {/* <Route exact path="/timeline/:username" component={TimelineContainer} /> */}
          <Route path="**" render={() => (<Redirect to="/feed" />)} />
        </Switch>
      </React.Fragment>
    );
  }
}

