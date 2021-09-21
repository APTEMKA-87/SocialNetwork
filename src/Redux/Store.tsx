import ProfileReducer, {addButtonPostAC, onPostChangeAC} from './profile-reducer';
import DialogsReducer, {addButtonMessageAC} from './dialogs-reducer';

export type PostsType = {
    id: number,
    post: string,
    likesCount: number
}

type DialogsType = {
    id: number,
    name: string
}

export type MessagesType = {
    id: number,
    message: string
}

export type ProfilePageType = {
    posts: Array<PostsType>,
    newPostText: string
}

export type DialogPageType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>
}

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogPage: DialogPageType
}

export type StoreType = {
    _state: RootStateType,
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void,
    getState: () => RootStateType,
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes =
    addButtonPostACType |
    addButtonMessageACType |
    onPostChangeACType        //  type: 'UPDATE-NEW-POST-TEXT'

type addButtonPostACType = ReturnType<typeof addButtonPostAC>
type onPostChangeACType = ReturnType<typeof onPostChangeAC>
type addButtonMessageACType = ReturnType<typeof addButtonMessageAC>

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    post: 'Hi, my name is Artyom and I Front-end developer. I will be glad to job offers.',
                    likesCount: 0
                },
                {
                    id: 2, post: 'I’m a person who is addicted to programming. I have experience ' +
                        'in creating SPA using React/Redux, JS/TS, HTML/CSS. Now I’m improving ' +
                        'my skills and expanding them, learning new technologies. ',
                    likesCount: 10
                }
            ],
            newPostText: ''
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Bob'},
                {id: 2, name: 'Den'},
                {id: 3, name: 'Victor'},
                {id: 4, name: 'Valera'},
                {id: 5, name: 'Bill'},
                {id: 6, name: 'Anna'}
            ],

            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How r u?'},
                {id: 3, message: 'Thank`s'}
            ]
        }
    },
    _callSubscriber() {
        console.log('state change')
    },

    subscribe(observer) {
        this._callSubscriber = observer  // как обсервер видит изминения стора?
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.dialogPage = DialogsReducer(this._state.dialogPage, action)
        this._callSubscriber()
    }
}

export default store;
