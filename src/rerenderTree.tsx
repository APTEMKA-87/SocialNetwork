import {addDialog, addPost, RootStateType, updateNewPostText} from './Redux/State';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

export const rerenderTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                addDialog={addDialog}
                updateNewPostText={updateNewPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}