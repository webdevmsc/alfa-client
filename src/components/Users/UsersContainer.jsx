import {connect} from "react-redux";
import React from 'react';
import Users from "./Users";
import {createUser, deleteUser, updateUser} from "../../redux/users-reducer";

const UsersContainer = React.memo((props) => {
    return (
        <Users { ...props } />
    )
});

let mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

export default connect(mapStateToProps, { createUser, deleteUser, updateUser })(UsersContainer);
