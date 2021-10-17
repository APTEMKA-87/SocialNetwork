import {addPost, onPostChange, PostsType} from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import {RootStateType} from '../../../Redux/redux-store';
import {connect} from 'react-redux';

type MapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps,
    {
        onPostChange, addPost
    }
)(MyPosts)

export default MyPostsContainer;

