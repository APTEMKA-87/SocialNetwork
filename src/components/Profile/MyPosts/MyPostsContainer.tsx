import {addButtonPostAC, onPostChangeAC} from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import {RootStateType} from '../../../Redux/redux-store';
import {RootActionsType} from '../../Dialogs/DialogContainer';
import {connect} from 'react-redux';

let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: (action: RootActionsType) => void) => {    // правильно ли я типизировал?
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

