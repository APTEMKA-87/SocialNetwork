let rerenderTree = () => {
    console.log('state change')
}

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

let state: RootStateType = {
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
}

export let addPost = () => {
    let newPost: PostsType = {
        id: 5,
        post: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderTree()
}

export const addDialog = (dialogText: string) => {
    let newDialog: MessagesType = {
        id: 3,
        message: dialogText
    }
    state.dialogPage.messages.push(newDialog)
    rerenderTree()
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderTree()
}

export const subscribe = (observer: () => void) => {
    rerenderTree = observer
}

export default state;
