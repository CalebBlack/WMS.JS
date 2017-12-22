import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import getList from '../redux/actions/getlist';
import request from '../functions/request';
import toTitleCase from '../functions/totitlecase';
import HomeLink from '../components/homelink';
import './shows.less';

class Shows extends React.Component {
  componentWillMount(){
    this.props.dispatch(getList(this.props.type));
  }
  render(){
    return (
    <div className='shows'>
      <HomeLink/>
      <h1 className='title'>{toTitleCase(this.props.type)}</h1>
      {!this.props || !this.props.lists || !this.props.lists[this.props.type]? <p>loading</p> : <ul className='list showlist'>
      {Object.keys(this.props.lists[this.props.type].shows).map((show,index)=>{
        return (<li key={index} className='show'><Link onClick={this.forceUpdate} to={'/'+this.props.type+'/'+show}>{toTitleCase(show.split('.')[0])}</Link></li>)
      })}
      {this.props.lists[this.props.type].movies.map((movie,index)=>{
        return (<li key={index} className='movie'><Link onClick={this.forceUpdate} to={'/'+this.props.type+'/'+movie}>{toTitleCase(movie.split('.')[0])}</Link></li>);
      })}
      </ul>}
    </div>);
  }
}
export default connect(state=>{return {lists:state.lists}})(Shows);
