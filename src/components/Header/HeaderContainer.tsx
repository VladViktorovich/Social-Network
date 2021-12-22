import axios from 'axios';
import React from 'react';
import {connect} from 'react-redux';
import {RootStoreType} from '../../redux/redux-store';
import {setAuthUserData} from '../../redux/auth-reducer';
import {Header} from './Header';


type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null) => void
}

class HeaderContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                this.props.setAuthUserData(id, email, login)
            }
        })
    }

    render() {
        return <Header  {...this.props}/>
    }
}

const mapStateToProps = (state: RootStoreType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)