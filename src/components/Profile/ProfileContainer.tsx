import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, ProfileType} from '../../Redux/profile-reducer';
import {RootStateType} from '../../Redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
}

type CommonPropsType = mapStateToPropsType & MapDispatchPropsType
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & CommonPropsType



class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = '2'
        }

        this.props.getUserProfile(+userId)
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

export default connect<mapStateToPropsType, MapDispatchPropsType,{}, RootStateType>(mapStateToProps, {getUserProfile}) (WithUrlDataProfileContainerComponent)