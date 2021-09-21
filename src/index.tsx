import './index.css';
import store from './Redux/redux-store';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {RootStateType} from './Redux/Store';

export const rerenderTree = (state: RootStateType) => { // why unused state
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

/*rerenderTree() // если вкорячить стейт хз что происходит
store.subscribe(rerenderTree)*/

rerenderTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderTree(state)
})