import React from 'react';
import request from '../functions/request';
import './movies.less';

class Movies extends React.Component {
  constructor(props){
    super(props);
    this.state={movies:'loading'}
  }
  componentWillMount(){
    request('info/movies').then(response=>console.log(response)).catch(err=>console.log(err));
  }
  render(){
    return (
    <div className='movies'>
      <h1 className='title'>Movies</h1>
      {this.state.movies === 'loading' ? <p>loading</p> : null}
    </div>);
  }
}
export default Movies;
