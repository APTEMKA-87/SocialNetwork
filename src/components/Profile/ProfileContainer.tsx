import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileType, setUserProfile} from '../../Redux/profile-reducer';
import {RootStateType} from '../../Redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type CommonPropsType = mapStateToPropsType & MapDispatchPropsType
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & CommonPropsType



class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = '2'
        }

        console.log(userId)

        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

let mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
        profile: state.profilePage.profile
})

let WithUrlDataProfileContainerComponent = withRouter(ProfileContainer)

export default connect (mapStateToProps, {
    setUserProfile
}) (WithUrlDataProfileContainerComponent)