type PostsType = {
    id: number,
    post: string,
    likesCount: number
}

type DialogsType ={
    id: number,
    name: string
}

type MessagesType = {
    id: number,
    message: string
}

 export type RootStateType = {
    posts: Array<PostsType>,
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>
}

let state: RootStateType = {
    posts:[
        {id: 1, post: 'Hi', likesCount: 0},
        {id: 2, post: 'Bye', likesCount: 10}
    ],
    dialogs:[
        {id: 1, name: 'Bob'},
        {id: 2, name: 'Den'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Bill'},
        {id: 6, name: 'Anna'}
    ],
    messages:[
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How r u?'},
        {id: 3, message: 'Thank`s'}
    ]
}

export default state;
