import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import getList from '../redux/actions/getlist';
import request from '../functions/request';
import './movies.less';

function toTitleCase(str){
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

class Movies extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.props.dispatch(getList('movies'));
  }
  render(){
    console.log('movies',(this.props || {}).movies);
    return (
    <div className='movies'>
      <h1 className='title'>Movies</h1>
      {!this.props || !this.props.movies ? <p>loading</p> : <ul className='movielist'>{this.props.movies.map((movie,index)=>{
        return (<li key={index} className='movie'><Link to={'/movies/'+movie}>{toTitleCase(movie.split('.')[0])}</Link></li>)
      })}</ul>}
    </div>);
  }
}
export default connect(state=>{console.log('state',state);return {movies:state.lists.movies}})(Movies);
