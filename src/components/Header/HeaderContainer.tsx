import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {RootStateType} from '../../Redux/redux-store';
import {getAuthUserData} from '../../Redux/auth-reducer';

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    getAuthUserData: () => void
}

type PropsType =  MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
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
    getAuthUserData
})(HeaderContainer)