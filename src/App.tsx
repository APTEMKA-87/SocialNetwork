import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import {RootStoreType} from './Redux/redux-store';
import DialogContainer from './components/Dialogs/DialogContainer';
import {ActionTypes, RootStateType} from './Redux/Store';
import {Store} from 'redux';


type AppPropsType = {
    state: RootStateType,
    dispatch: (action: ActionTypes) => void
    store: Store<RootStoreType, any>      // type
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
