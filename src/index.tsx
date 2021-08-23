import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './Redux/State';
import {PostsType} from './components/Profile/MyPosts/MyPosts';
import {DialogsType, MessagesType} from './components/Dialogs/Dialogs';

/*let posts = [                                // перенесли в стейт в папке редакс
    {id: 1, post: 'Hi', likesCount: 0},
    {id: 2, post: 'Bye', likesCount: 10}
]

let dialogs = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Victor'},
    {id: 4, name: 'Valera'},
    {id: 5, name: 'Ignat'},
    {id: 6, name: 'Jenya'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How r u?'},
    {id: 3, message: 'Thank`s'}
]*/

/*export type StateType = {                       // пока я хз для чего эта типизация
    posts: Array<PostsType>,
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>
}*/

ReactDOM.render(
    <React.StrictMode>
        <App appState={state}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
