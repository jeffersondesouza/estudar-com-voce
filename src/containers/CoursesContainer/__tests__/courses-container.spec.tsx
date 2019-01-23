import * as React from 'react';
import axios from 'axios';

import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

import * as renderer from 'react-test-renderer';

import store from '../../../store';
import CoursesContainer from './../';
import ResMock from '../../../../__mocks__/courses.mock';

jest.mock('axios');

describe('<CoursesContainer>', () => {

  describe('when component mount', () => {

    it('should call and list courses', () => {

      const resp = { data: ResMock };
      const component = <CoursesContainer dispatchLoadFeed={() => { }} />;

      (axios.get as any).mockResolvedValue(resp);

      const container = (
        <Provider store={store}>
          <StaticRouter context={{}}>{component}</StaticRouter>
        </Provider>
      );
      const tree = renderer.create(container).toJSON();
      expect(tree).toMatchSnapshot();
      expect(axios.get).toHaveBeenCalled();


      
    });

  });


});


/*

HttpService.get = jest.fn();


describe('<CoursesContainer>', () => {

  describe('when CoursesContainer mount', () => {

    context('when server respond feed request with SUCCESS', () => {
      it('should match the component spnapshot', () => {

        HttpService.get.mockResolvedValue(USERS_MOCK);

        const component = (
          <Provider store={store}>
            <StaticRouter context={{}}>
              <CoursesContainer />
            </StaticRouter>
          </Provider>
        );

        const tree = renderer.create(component).toJSON()
        const wrapper = mount(component);

        expect(tree).toMatchSnapshot();
        expect(HttpService.get).toHaveBeenCalled();

      });
    });

    context('when server respond feed request with ERROR', () => {
      it('should match the component spnapshot', () => {

        HttpService.get.mockRejectedValue(new Error('could not load the components'));

        const component = (
          <Provider store={store}>
            <StaticRouter context={{}}>
              <CoursesContainer />
            </StaticRouter>
          </Provider>
        );

        const tree = renderer.create(component).toJSON()
        const wrapper = mount(component);

        expect(tree).toMatchSnapshot();
        expect(HttpService.get).toHaveBeenCalled();

      });
    });

  });

});


 */