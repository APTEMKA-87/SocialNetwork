import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import ProfileReducer from './profile-reducer';
import DialogsReducer from './dialogs-reducer';
import usersReducer from './user-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let rootReducer = combineReducers({
    profilePage:ProfileReducer,
    dialogPage:DialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})
export type RootStateType = ReturnType<typeof rootReducer>
let store: Store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store;

