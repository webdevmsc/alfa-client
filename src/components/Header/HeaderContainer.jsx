import {connect} from "react-redux";
import Header from "./Header";
import React from 'react';

const HeaderContainer = React.memo((props) => {
    return (
        <Header { ...props } />
    )
});

let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {})(HeaderContainer);
