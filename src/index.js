import React from 'react';
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import { createRoot } from "react-dom/client";
import './index.css'; 
import App from './containers/App';
import 'tachyons';
// import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { searchRobots } from './reducers';
import {Provider} from 'react-redux'

const store = createStore(searchRobots)
const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
