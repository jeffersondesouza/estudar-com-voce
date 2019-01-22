import * as React from 'react';
import { shallow, mount } from 'enzyme';

import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

import renderer from 'react-test-renderer';

import USERS_MOCK from '../../../../__mocks__/users.mock';

import store from '../../../store';
import HttpService from '../../../utils/HttpService';
import { FeedContainer } from '..';





describe('<FeedContainer>', () => {

  it('test', ()=>{
    expect(1).toBe(1);
    const component = (
      <Provider store={store}>
        <StaticRouter context={{}}>
          <FeedContainer dispatchLoadFeed={()=>{}}/>
        </StaticRouter>
      </Provider>
    );


  })

});


/*

HttpService.get = jest.fn();


describe('<FeedContainer>', () => {

  describe('when FeedContainer mount', () => {

    context('when server respond feed request with SUCCESS', () => {
      it('should match the component spnapshot', () => {

        HttpService.get.mockResolvedValue(USERS_MOCK);

        const component = (
          <Provider store={store}>
            <StaticRouter context={{}}>
              <FeedContainer />
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
              <FeedContainer />
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