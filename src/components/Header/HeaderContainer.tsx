import React from 'react';
import Header from './Header';
import axios from 'axios';
import {ProfileType} from '../../Redux/profile-reducer';
import {connect} from 'react-redux';
import {RootStateType} from '../../Redux/redux-store';
import {setAuthUserData} from '../../Redux/auth-reducer';

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}

type PropsType =  MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {userId, email, login} = response.data.data // типа деструктуризация хз для чего и что это?
                    this.props.setAuthUserData(userId, email, login)
                }
            });
    }

    render() {
        return <Header
            login={this.props.login}
            isAuth={this.props.isAuth}
        />;
    }
}

const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, {
    setAuthUserData
})(HeaderContainer)