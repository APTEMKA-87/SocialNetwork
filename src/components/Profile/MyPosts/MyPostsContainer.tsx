import {ActionsProfileType, addButtonPostAC, onPostChangeAC} from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import {RootStateType} from '../../../Redux/redux-store';
import {connect} from 'react-redux';

let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsProfileType) => void) => {    // правильно ли я типизировал?
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

