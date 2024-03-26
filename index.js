/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { Provider } from 'react-redux';
import React, {Component} from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
);

class RashanApp extends React.Component {

    render() {
        return (
            <Provider store={store}>
            <App />
        </Provider>);
    }
}

AppRegistry.registerComponent(appName, () => RashanApp);
