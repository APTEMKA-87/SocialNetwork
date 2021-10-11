import {addButtonPostAC, onPostChangeAC, PostsType} from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import {RootStateType} from '../../../Redux/redux-store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string
}

type MapDispatchToProps = {
    onPostChange: (text: string) => void
    addPost: () => void
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        onPostChange: (text: string) => {
            dispatch(onPostChangeAC(text))
        },
        addPost: () => {
            dispatch(addButtonPostAC())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;

