import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogContainer from './components/Dialogs/DialogContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';

function App() {
    return <BrowserRouter>
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <Route path="/dialogs"
                   render={() => <DialogContainer/>}/>
            <Route path="/profile/:userId?"
                   render={() => <ProfileContainer/>}/>
            <Route path="/users"
                   render={() => <UsersContainer/>}/>
            <Route path="/login"
                   render={() => <LoginPage/>}/>
        </div>
    </BrowserRouter>;
}

export default App;
 