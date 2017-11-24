import React from 'react';
import Header from '../components/header';

class Home extends React.Component {
  render(){
    return (
      <div className='home'>
        <Header/>
        <p>There&#39;s no place like home...</p>
      </div>
    )
  }
}

export default Home;
