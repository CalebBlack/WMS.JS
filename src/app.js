import React from 'react';
import Router from './router';
import Background from './components/background';
import {initialize} from './redux/actions/login';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './app.less';

class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(initialize());
  }
  render(){
    return (
      <div id='app'>
        <Background/>
        <Router/>
      </div>
    );
  }
}
export default withRouter(connect()(App));
