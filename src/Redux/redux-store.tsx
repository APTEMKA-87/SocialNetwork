import {combineReducers, createStore, Store} from 'redux';
import ProfileReducer from './profile-reducer';
import DialogsReducer from './dialogs-reducer';

let reducers = combineReducers({
    profilePage:ProfileReducer,
    dialogPage:DialogsReducer
})
export type RootStateType = ReturnType<typeof reducers>
let store: Store = createStore(reducers)

export default store;

