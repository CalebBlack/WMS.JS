import React from 'react';
import {Link} from 'react-router-dom';
import './header.less';

class Header extends React.Component {
  render(){
    return (
      <header className='primary'>
        <Nav links={[['Movies','movies'],['Anime','anime'],['Shows','shows'],['Games','games']]}/>
      </header>
    )
  }
}
class Nav extends React.Component {
  render(){
    return (
      <nav>
        <ul className='links'>
          {this.props.links.map((link,index)=>{return (<li key={index}><Link to={link[1]}>{link[0]}</Link></li>)})}
        </ul>
      </nav>
    )
  }
}

export default Header;
