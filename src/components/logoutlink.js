import React from 'react';
import './logoutlink.less';
import {Link} from 'react-router-dom';

class LogoutLink extends React.Component {
  render(){
    return(
      <Link className='logoutlink' to='/logout'>♦♦</Link>
    );
  }
}
export default LogoutLink;
