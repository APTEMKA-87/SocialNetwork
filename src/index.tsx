import './index.css';
import store, {RootStoreType} from './Redux/redux-store';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';


export const rerenderTree = (state: RootStoreType) => {   // type RootStateType
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
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

