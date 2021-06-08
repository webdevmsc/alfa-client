import './App.css';
import {Backdrop, CircularProgress, makeStyles} from "@material-ui/core";
import {useEffect} from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {handleError, initializeApp} from "./redux/app-reducer";
import React from 'react';
import store from "./redux/redux-store";
import UsersContainer from "./components/Users/UsersContainer";


const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 5,
        color: '#fff',
    }
}))

const App = React.memo(({initializeApp, initialized}) => {
  let styles = useStyles();
  useEffect(() => {
    initializeApp();
  })
  if (!initialized) {
    return (
        <Backdrop className={styles.backdrop} open={!initialized}>
          <CircularProgress color="inherit" />
        </Backdrop>
    )
  }
  return (
      <div className={styles.body}>
          <HeaderContainer/>
          <UsersContainer/>
      </div>
  )
});

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        globalError: state.app.globalError
    }
}

let AppContainer = connect(mapStateToProps, {initializeApp, handleError})(App);

let Application = () => {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    )
}

export default Application;
