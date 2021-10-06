import {combineReducers, createStore, Store} from 'redux';
import ProfileReducer from './profile-reducer';
import DialogsReducer from './dialogs-reducer';

let rootReducer = combineReducers({
    profilePage:ProfileReducer,
    dialogPage:DialogsReducer
})
export type RootStateType = ReturnType<typeof rootReducer>
let store: Store = createStore(rootReducer)

export default store;

