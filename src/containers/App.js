import React, { Component } from 'react';
import styles from './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux';

import Login from './Login';


class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={styles.App}>
          <h1>Cinema</h1>
          {this.props.isLogged
              ? <h2>Logged as: {this.props.username}</h2>
              : null
          }
          <BrowserRouter>
            <Route exact path="/" component={Login}></Route>
          </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
      username: state.user.username,
      isLogged: state.user.isLogged
  }
}


export default connect(mapStateToProps)(App);
