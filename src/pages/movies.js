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
    this.state={movies:'loading'}
  }
  componentWillMount(){
    this.props.dispatch(getList('movies',(err,list)=>{
      if (err) return console.log('err',err);
      console.log('list',list);
      this.setState(Object.assign({},this.state,{movies:list}));
    }));
  }
  render(){
    return (
    <div className='movies'>
      <h1 className='title'>Movies</h1>
      {this.state.movies === 'loading' ? <p>loading</p> : this.state.movies.map((movie,index)=>{
        return (<Link className='movie' key={index} to={'/movies/'+movie}>{toTitleCase(movie.split('.')[0])}</Link>)
      })}
    </div>);
  }
}
export default connect()(Movies);
