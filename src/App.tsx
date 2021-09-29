import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionTypes, RootStateType} from './Redux/Store';
import {Store} from 'redux';
import {RootStoreType} from './Redux/redux-store';


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
            <Route path="/dialogs" render={() => <Dialogs dialogPage={props.state.dialogPage}
                                                          dispatch={props.dispatch}/>}/>
            <Route path="/profile" render={() => <Profile store={props.store}/>
            }
            />
        </div>
    </BrowserRouter>;
}

export default App;
