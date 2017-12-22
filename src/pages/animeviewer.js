import React from 'react';
import {connect} from 'react-redux';
import HomeLink from '../components/homelink';
import {Link} from 'react-router-dom';
import toTitleCase from '../functions/totitlecase';
import getList from '../redux/actions/getlist';

class AnimeViewer extends React.Component {
  render(){
    if (!this.props || !this.props.path) {
      return null;
    }
    if ( !this.props.anime) {
      this.props.dispatch(getList('anime'));
      return (<p>Loading...</p>)
    }
    let path = this.props.path;
    let parts = path.split('/');
    let show = parts[0];
    let season = parts[1];
    let episode = parts[2];
    let data = this.props.anime.shows[show];
    if (show) {
      if (season) {
        if (episode) {
          return (this.renderVideo('/api/anime'+this.path));
        } else {
          return (
            <div className='anime'>
            <HomeLink/>
            <h1 className='title'>Episodes</h1>
            <ul className='list episodelist'>
              {this.props.anime.shows[show][season].map((episode,index)=>{
                return (
                  <li key={index} className='episode'><Link onClick={this.forceUpdate} to={'/anime/'+show+'/'+season+'/'+episode}>{toTitleCase(episode.split('.')[0])}</Link></li>
                );
              })}
            </ul>
            </div>
          );
        }
      } else {
        return (
          <div className='anime'>
          <HomeLink/>
          <h1 className='title'>Seasons</h1>
          <ul className='list seasonlist'>
            {Object.keys(data).map((season,index)=>{
              return (
                <li key={index} className='season'><Link onClick={this.forceUpdate} to={'/anime/'+show+'/'+season+'/'}>{season}</Link></li>
              );
            })}
          </ul>
          </div>
        );
      }
    } else {
      return (<p>Error</p>);
    }
  }
}
export default connect(state=>{return {anime:state.lists.anime}})(AnimeViewer);
