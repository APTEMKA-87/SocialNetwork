import {addPost, PostsType} from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import {RootStateType} from '../../../Redux/redux-store';
import {connect} from 'react-redux';

type MapStateToPropsType = {
    posts: Array<PostsType>
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)

export default MyPostsContainer;

