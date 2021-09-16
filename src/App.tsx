import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionTypes, RootStateType} from './Redux/State';


type AppPropsType = {
    state: RootStateType,
    /*addPost: (postText: string) => void,
    addDialog: (dialogText: string) => void,
    updateNewPostText: (newText: string) => void*/
    dispatch: (action: ActionTypes) => void
}

function App(props: AppPropsType) {

    return <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Route path="/dialogs" render={() => <Dialogs
                dialogPage={props.state.dialogPage}
                dispatch ={props.dispatch}
                /*addDialog={props.addDialog}*/
            />}/>
            <Route path="/profile" render={() => <Profile
                profilePage={props.state.profilePage}
                dispatch ={props.dispatch}
                /*addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}*/
            />}/>
        </div>
    </BrowserRouter>;
}

export default App;

