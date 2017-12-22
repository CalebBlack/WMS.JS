import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Lost from './pages/lost';
import Logout from './pages/logout';
import Login from './pages/login';
import Signup from './pages/signup';
import Movies from './pages/movies';
import Anime from './pages/anime';
import Viewer from './pages/viewer';
import Home from './pages/home';
import './router.css';

class Router extends React.Component {
  render(){
    var location = this.props ? this.props.location ? this.props.location.pathname : null : null;
    if (this.props.loggedIn !== true && location !== '/signup') {
      return (<div className='page' id='page'><Login/></div>);
    } else {
      let viewers = ['movies','anime'].map(name=>'/'+name+'/*').map((path,index)=>{
        return (<Route key={index} path={path} component={Viewer}/>)
      });
      return (
      <div className='page' id='page'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/movies' component={Movies}/>
          <Route exact path='/anime' component={Anime}/>
          <Route exact path='/logout' component={Logout}/>
          <Route exact path='/login' component={Login}/>
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
