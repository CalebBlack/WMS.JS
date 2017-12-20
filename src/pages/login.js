import React from 'react';

class Login extends React.Component {
  render(){
    return (
      <div className='login'>
        <h1>Login</h1>
        <form className='loginform' onSubmit={e=>e.preventDefault()}>
          <input className='username' type='text'/>
          <input className='password' type='password'/>
          <input className='submit' type='submit'>Login</input>
        </form>
      </div>
    );
  }
}

module.exports = Login;
