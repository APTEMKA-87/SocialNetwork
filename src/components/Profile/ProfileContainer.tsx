import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getStatus, getUserProfile, ProfileType, updateStatus} from '../../Redux/profile-reducer';
import {RootStateType} from '../../Redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (status: string) => void
    updateStatus: (status: string) => void
}

type CommonPropsType = MapStateToPropsType & MapDispatchPropsType
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & CommonPropsType


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(+userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose <React.ComponentType> (
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer)