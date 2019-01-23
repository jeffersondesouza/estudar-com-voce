import * as React from 'react';
import axios from 'axios';

import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

import * as renderer from 'react-test-renderer';

import store from '../../../store';
import CourseDetailsContainer from './../';


jest.mock('axios');

describe('<CourseDetailsContainer>', () => {

  describe('when component mount', () => {
    let component;
    let container;
    let tree;

    it('should call and present a course', () => {

      const resp = { data: ResMock };
      component = <CourseDetailsContainer
        dispatchLoad={({ }) => { }}
        match={{ params: { id: 2 } }}
        selectedCourse={null}
        isLoadingCourse={false}
      />;

      (axios.get as any).mockResolvedValue(resp);

      container = (
        <Provider store={store}>
          <StaticRouter context={{}}>{component}</StaticRouter>
        </Provider>
      );

      tree = renderer.create(container).toJSON();

      expect(tree).toMatchSnapshot();
      expect(axios.get).toHaveBeenCalled();

    });


  });


});


const ResMock = {
  "id": 1,
  "name": "Física II",
  "description": "Curso remasterizado e criado inteiramente baseado na sua graduação da POLI USP. Provas passadas resolvidas, teoria explicadinha e muitos exercícios extra. Aproveite!",
  "generic": false,
  "highlight": true
}
