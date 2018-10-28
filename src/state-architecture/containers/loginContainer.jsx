import React from 'react';
import {connect} from 'react-redux';

//Only containers can connect to redux store
//Containers should abstract high logic areas of the application
class LoginContainer extends React.Component {
    state = {};

    render () {
        
    }
}

const mapStateToProps = state => ({
    username: state.username,
    email: state.email,
    avatar: state.avatar,
    token: state.token,
    skills: state.skills
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch(actionCreator)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer); 
