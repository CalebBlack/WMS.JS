import React from 'react';
import request from '../functions/request';
import {connect} from 'react-redux';
import './signup.less';
import * as loginActions from '../redux/actions/login';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }
  render(){
    return (
      <div className='signup'>
        <h1 className='title'>Signup</h1>
        <form className='signupform' onSubmit={e=>{e.preventDefault();}}>
          <input placeholder='Username' ref={ref=>{this.username = ref}} className='username' type='text'/>
          <input placeholder='Password' ref={ref=>{this.password = ref}} className='password' type='password'/>
          <input placeholder='Email' ref={ref=>{this.email = ref;}} className='email' type='text'/>
          <button onClick={this.submit} className='submit'>Signup</button>
        </form>
      </div>
    );
  }
  submit(){
    let username = this.username ? this.username.value : null;
    let password = this.password ? this.password.value : null;
    let email = this.email ? this.email.value : null;
    console.log('an',username,password,email);
    if (typeof username == 'string' && typeof password == 'string' && username.length > 0 && password.length > 7 && typeof email == 'string' && email.length > 4) {
      this.props.dispatch(loginActions.signup(username,password,email));
    }
  }
}

export default connect()(Signup);
