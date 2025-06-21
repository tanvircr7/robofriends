import React from 'react';
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import { createRoot } from "react-dom/client";
import './index.css'; 
import App from './containers/App';
import 'tachyons';
// import registerServiceWorker from './registerServiceWorker';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { thunk } from 'redux-thunk';
import { searchRobots, requestRobots } from './reducers';
import {Provider} from 'react-redux'

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducer, applyMiddleware(thunk, logger))
const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
