import './index.css';
import store from './Redux/State';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

export const rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderTree() // если вкорячить стейт хз что происходит

store.subscribe(rerenderTree)