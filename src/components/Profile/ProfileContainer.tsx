import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileType, setUserProfile} from '../../Redux/profile-reducer';
import {RootStateType} from '../../Redux/redux-store';

type ProfileContainerPropsType = {    // надо ли сюда что то передавать и что?
    setUserProfile: (profile: ProfileType) => void //
    profile: ProfileType | null
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {     // что передается вторым параметром?

    componentDidMount() {
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }


    render() {
        return (
            <Profile profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state: RootStateType) => ({          // какой стейт сюда приходит? profilePage
        profile: state.profilePage.profile
})



export default connect (mapStateToProps, {
    setUserProfile
}) (ProfileContainer)