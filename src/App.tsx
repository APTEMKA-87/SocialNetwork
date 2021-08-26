import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {RootStateType} from './Redux/State';


type AppPropsType = {
    state: RootStateType
}

function App(props: AppPropsType) {
    let a = props.state.profilePage.posts[0].post
    console.log(a)

    return <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Route path="/dialogs" render={() => <Dialogs
                dialogPage={props.state.dialogPage}/>}/>
            <Route path="/profile" render={() => <Profile
                posts={props.state.profilePage.posts}/>}/>
        </div>
    </BrowserRouter>;
}

export default App;
