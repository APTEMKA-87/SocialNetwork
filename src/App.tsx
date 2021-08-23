import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs, {DialogsType, MessagesType} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {PostsType} from './components/Profile/MyPosts/MyPosts';
import { RootStateType } from './Redux/State';

/*type AppPropsType ={              // норм ли типизация, код ревью
    posts: Array<PostsType>,
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>
}*/

type AppPropsType = {
    appState: RootStateType
}

function App(props: AppPropsType) {

    /*let posts = [                                // перенесли в Индекс
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

    return <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            {/*<Route path="/dialogs" component={Dialogs}/>          // переделали на render чтобы прокинуть пропсы
            <Route path="/profile" component={Profile}/>*/}

            <Route path="/dialogs" render={ () => <Dialogs dialogs={props.appState.dialogs} messages={props.appState.messages}/>} />
            <Route path="/profile" render={ () => <Profile posts={props.appState.posts}/>}/>
        </div>
    </BrowserRouter>;
}

export default App;
