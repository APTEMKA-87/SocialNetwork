import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators';
import {Textarea} from '../../common/FormsControl/FormsControl';

export type PostsType = {
    id: number,
    post: string,
    likesCount: number
}

export type MyPostsPropsType = {
    posts: Array<PostsType>,
    addPost: (values: any) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElement =
        props.posts.map(p => <Post postFromPost={p.post} key={p.id} likeCount={p.likesCount}/>)

    let addButtonPost = (values: any) => { // ToDo type inputElement?
        props.addPost(values.newPostText)
    }

    return <div>
        <MyPostReduxForm onSubmit={addButtonPost}/>
        {postsElement}
    </div>;
};

type AddNewPostFormType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={s.addPost}>
            <Field name="newPostText" component={Textarea}
                   validate={[required, maxLength10]}/>
            <button>Add Post</button>
        </div>
    </form>
}

const MyPostReduxForm = reduxForm<AddNewPostFormType>({form: 'myPost'})(AddNewPostForm)

export default MyPosts;