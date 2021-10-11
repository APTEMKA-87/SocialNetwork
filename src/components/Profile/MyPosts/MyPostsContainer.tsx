import {addButtonPostAC, onPostChangeAC} from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import {RootStateType} from '../../../Redux/redux-store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';


// типизация написать есть в ЮзерКонтейнер


let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
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

