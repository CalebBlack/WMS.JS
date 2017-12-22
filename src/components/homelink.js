import React from 'react';
import {Link} from 'react-router-dom';
import './homelink.less';

class HomeLink extends React.Component {
  render(){
    return (
      <Link to='/' className='tohome'>⌂</Link>
    );
  }
}
export default HomeLink;
