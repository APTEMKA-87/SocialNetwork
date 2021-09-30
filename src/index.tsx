import './index.css';
import store, {RootStateType, } from './Redux/redux-store';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';


export const rerenderTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderTree(state)
})

