import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import store from './Redux/redux-store';
import {Provider} from './StoreContext';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


