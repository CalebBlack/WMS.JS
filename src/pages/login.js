import React from 'react';
import request from '../functions/request';
import './login.less';
import * as loginActions from '../redux/actions/login';
import {connect} from 'react-redux';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }
  render(){
    return (
      <div className='login'>
        <h1 className='title'>Login</h1>
        <form className='loginform' onSubmit={e=>{e.preventDefault();}}>
          <input placeholder='Username' ref={ref=>{this.username = ref}} className='username' type='text'/>
          <input placeholder='Password' ref={ref=>{this.password = ref}} className='password' type='password'/>
          <button onClick={this.submit} className='submit'>Login</button>
        </form>
        <a href='/signup' className='tosignup'>New User?</a>
      </div>
    );
  }
  submit(){
    let username = this.username ? this.username.value : null;
    let password = this.password ? this.password.value : null;
    if (typeof username == 'string' && typeof password == 'string' && username.length > 0 && password.length > 7) {
      this.props.dispatch(loginActions.login(username,password));
    }
  }
}

export default connect()(Login);
