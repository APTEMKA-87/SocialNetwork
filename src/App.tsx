import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogContainer from './components/Dialogs/DialogContainer';
import UsersContainer from './components/Users/UsersContainer';

function App() {
    return <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Route path="/dialogs"
                   render={() => <DialogContainer/>}/>
            <Route path="/profile"
                   render={() => <Profile/>}/>
            <Route path="/users"
                   render={() => <UsersContainer/>}/>
        </div>
    </BrowserRouter>;
}

export default App;
