export type PostsType = {
    id: number,
    post: string,
    likesCount: number
}

type DialogsType = {
    id: number,
    name: string
}

type MessagesType = {
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

/*type AddPostActionType = {
    type: 'ADD-POST',
}*/

type AddDialogActionType = {
    type: 'ADD-DIALOG',
    dialogText: string
}

type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}

export type ActionTypes =
    addButtonPostACType |
    AddDialogActionType |
    UpdateNewPostTextActionType

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

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost: PostsType = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === 'ADD-DIALOG') {
            let newDialog: MessagesType = {
                id: 3,
                message: action.dialogText
            }
            this._state.dialogPage.messages.push(newDialog)
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        }
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    }
}

type addButtonPostACType = ReturnType<typeof addButtonPostAC>

/*type addButtonPostACType = {
    type: 'ADD-POST'
}*/

type onPostChangeACType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}

export const addButtonPostAC = () => {
    return {
        type: 'ADD-POST',
    } as const
}

export const onPostChangeAC = (newText: string): onPostChangeACType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}

type addButtonMessageACType = {
    type: 'ADD-DIALOG',
    dialogText: string
}

export const addButtonMessageAC = (dialogText: string): addButtonMessageACType => {
    return {
        type: 'ADD-DIALOG',
        dialogText: dialogText
    } as const
}

export default store;
