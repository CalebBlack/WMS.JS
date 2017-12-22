import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import getList from '../redux/actions/getlist';
import request from '../functions/request';
import HomeLink from '../components/homelink';
import './anime.less';

function toTitleCase(str){
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

class Anime extends React.Component {
  componentWillMount(){
    this.props.dispatch(getList('anime'));
  }
  render(){
    return (
    <div className='anime'>
      <HomeLink/>
      <h1 className='title'>Anime</h1>
      {!this.props || !this.props.anime ? <p>loading</p> : <ul className='list animelist'>
      {Object.keys(this.props.anime.shows).map((anime,index)=>{
        return (<li key={index} className='show'><Link to={'/anime/'+anime}>{toTitleCase(anime.split('.')[0])}</Link></li>)
      })}
      {this.props.anime.movies.map((movie,index)=>{
        return (<li key={index} className='movie'><Link to={'/anime/'+movie}>{toTitleCase(movie.split('.')[0])}</Link></li>);
      })}
      </ul>}
    </div>);
  }
}
export default connect(state=>{return {anime:state.lists.anime}})(Anime);
