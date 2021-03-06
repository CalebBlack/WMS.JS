import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import getList from '../redux/actions/getlist';
import request from '../functions/request';
import HomeLink from '../components/homelink';
import toTitleCase from '../functions/totitlecase';
import './movies.less';


class Movies extends React.Component {
  componentWillMount(){
    this.props.dispatch(getList('movies'));
  }
  render(){
    return (
    <div className='movies'>
      <HomeLink/>
      <h1 className='title'>Movies</h1>
      {!this.props || !this.props.movies ? <p>loading</p> : <ul className='movielist'>{this.props.movies.map((movie,index)=>{
        return (<li key={index} className='movie'><Link to={'/movies/'+movie}>{toTitleCase(movie.split('.')[0])}</Link></li>)
      })}</ul>}
    </div>);
  }
}
export default connect(state=>{return {movies:state.lists.movies}})(Movies);
