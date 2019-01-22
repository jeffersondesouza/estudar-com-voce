/**
 * Store configuration - Here we configure the application store, making it avalable to the projt by simporting this module 
 */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './modules/index';

export const configure = (initialState = {}) => (
    createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(thunk),
        )
    )
);

export default configure();
