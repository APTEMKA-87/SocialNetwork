import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {RootStateType} from './Redux/State';


type AppPropsType = {
    state: RootStateType,
    addPost: (postText: string) => void
    addDialog: (dialogText: string) => void
}

function App(props: AppPropsType) {

    return <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Route path="/dialogs" render={() => <Dialogs
                dialogPage={props.state.dialogPage}
                addDialog={props.addDialog}
            />}/>
            <Route path="/profile" render={() => <Profile
                profilePage={props.state.profilePage}
                addPost={props.addPost}
            />}/>
        </div>
    </BrowserRouter>;
}

export default App;

