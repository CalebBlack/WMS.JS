import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Lost from './pages/lost';
import Logout from './pages/logout';
import Home from './pages/home';
import './router.css';

class Router extends React.Component {
  render(){
    return (
      <div className='page' id='page'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/logout' component={Logout}/>
          <Route path='/' component={Lost}/>
        </Switch>
      </div>
    );
  }
}
export default Router;
