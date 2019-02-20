import React from 'react';
import {connect} from 'react-redux';
import Profile from './profile';
import {login, logout} from "../redux/actions/actions";
import Photos from "./photos";
import "./profile-container.scss"

// the props are profile and loggedIn, destructuring on the function signature
const profileContainer = (props) => {
    const {profile, loggedIn} = props;
    return (
        loggedIn
            ? <div>
                <Profile profile={profile}/>
                <button onClick={() => props.logout()}>Logout</button>
            <div >
                <Photos></Photos>
            </div>
            </div>
            : <div>Please login to view profile.
                <button onClick={() => props.login()}>Login</button>

            </div>
    )
};

const mapStateToProps = function (state) {
    return {
        profile: state.user.profile,
        loggedIn: state.auth.loggedIn
    }
};

const mapDispatchToProps = function (dispatch) {
    return {
        login: () => dispatch(login()),
        logout: () => dispatch(logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(profileContainer);