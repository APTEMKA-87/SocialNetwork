import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogContainer from './components/Dialogs/DialogContainer';
import {Store} from 'redux';
import {RootStateType} from './Redux/redux-store';
import {ActionsProfileType} from './Redux/profile-reducer';
import {ActionsDialogsType} from './Redux/dialogs-reducer';

export type RootActionsType = ActionsProfileType | ActionsDialogsType

type AppPropsType = {
    state: RootStateType,
    dispatch: (action: RootActionsType) => void
    store: Store
}

function App(props: AppPropsType) {

    return <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Route path="/dialogs" render={() => <DialogContainer store={props.store}/>}/>
            <Route path="/profile" render={() => <Profile store={props.store}/>
            }
            />
        </div>
    </BrowserRouter>;
}

export default App;
