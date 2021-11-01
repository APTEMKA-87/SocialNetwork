import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import ProfileReducer from './profile-reducer';
import DialogsReducer from './dialogs-reducer';
import usersReducer from './user-reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';

let rootReducer = combineReducers({
    profilePage:ProfileReducer,
    dialogPage:DialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})
export type RootStateType = ReturnType<typeof rootReducer>
let store: Store = createStore(rootReducer/*, composeWithDevTools()*/, applyMiddleware(thunkMiddleware))

export default store;

