import React from 'react';
import Header from '../components/header';
import LogoutLink from '../components/logoutlink';

class Home extends React.Component {
  render(){
    return (
      <div className='home'>
        <Header/>
        <LogoutLink/>
      </div>
    )
  }
}

export default Home;
