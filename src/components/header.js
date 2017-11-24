import React from 'react';
import './header.less';

class Header extends React.Component {
  render(){
    return (
      <header className='primary'>
        <Nav links={[['Movies','movies'],['Anime','anime'],['Favorite','favorite'],['All','all']]}/>
      </header>
    )
  }
}
class Nav extends React.Component {
  render(){
    return (
      <nav>
        <ul className='links'>
          {this.props.links.map((link,index)=>{return (<li><a href={link[1]} key={index}>{link[0]}</a></li>)})}
        </ul>
      </nav>
    )
  }
}

export default Header;
