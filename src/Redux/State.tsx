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
    addPost: () => void,
    addDialog: (dialogText: string) => void,
    updateNewPostText: (newText: string) => void,
    subscribe: (observer: () => void) => void,
    getState: () => RootStateType,
    _callSubscriber: () => void
}

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

    _callSubscriber  ()  {
        console.log('state change')
    },

    addPost() {
        let newPost: PostsType = {
            id: 5,
            post: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },

    addDialog(dialogText: string) {
        let newDialog: MessagesType = {
            id: 3,
            message: dialogText
        }
        this._state.dialogPage.messages.push(newDialog)
        this._callSubscriber()
    },

    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    getState() {
        return this._state
    }
}

export default store;
