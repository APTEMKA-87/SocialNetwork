import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {login} from '../../Redux/auth-reducer';
import {required} from '../../utils/validators';
import {Redirect} from 'react-router-dom';
import {RootStateType} from '../../Redux/redux-store';

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={'input'} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'} validate={[required]}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: any) => { // ToDo type

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>    //ToDo нужен ли слеш?
    }

    return <div>
        <h1> LOGIN </h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state: RootStateType) => ({  // ToDo посмотреть типизацию
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);