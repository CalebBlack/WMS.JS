import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Lost from './pages/lost';
import Logout from './pages/logout';
import Activation from './pages/activation';
import Login from './pages/login';
import Signup from './pages/signup';
import Viewer from './pages/viewer';
import Home from './pages/home';
import './router.css';

class Router extends React.Component {
  render(){
    var location = this.props ? this.props.location ? this.props.location.pathname : null : null;
    if (this.props.loggedIn !== true && !['/activation','/signup'].includes(location.toLowerCase())) {
      return (<div className='page' id='page'><Login/></div>);
    } else {
      let viewers = ['movies','anime','shows','cartoons'].map(name=>'/'+name).map((path,index)=>{
        return (<Route key={index} path={path} component={Viewer}/>)
      });
      return (
      <div className='page' id='page'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/logout' component={Logout}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/activation' component={Activation}/>
          <Route exact path='/signup' component={Signup}/>
          {viewers}
          <Route path='/' component={Lost}/>
        </Switch>
      </div>
      );
    }
  }
}
export default withRouter(connect(state=>{return {loggedIn:state.loggedIn}})(Router));
