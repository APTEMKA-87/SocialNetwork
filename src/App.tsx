import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {RootStateType} from './Redux/State';


type AppPropsType = {
    appState: RootStateType
}

function App(props: AppPropsType) {

    return <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Route path="/dialogs" render={ () => <Dialogs dialogs={props.appState.dialogPage.dialogs} messages={props.appState.dialogPage.messages}/>} />
            <Route path="/profile" render={ () => <Profile posts={props.appState.profilePage.posts}/>}/>
        </div>
    </BrowserRouter>;
}

export default App;
