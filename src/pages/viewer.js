import React from 'react';
import Player from '../components/player';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import AnimeViewer from './animeviewer';
import './viewer.less';

class Viewer extends React.Component {
  constructor(props){
    super(props);
    this.onEnd = this.onEnd.bind(this);
    this.state = {redirect:null};
    this.renderVideo = this.renderVideo.bind(this);
  }
  componentWillMount(){
    let url = this.props && this.props.location && this.props.location.pathname ? this.props.location.pathname : null;
    if (url) {
      this.url = url;
      let parts = url.split('/').filter(part=>part);
      this.type = parts[0];
      this.path = parts.slice(1).join('/');
    } else {
      this.type = null;
      this.path = null;
    }
  }
  render(){
    if (this.state.redirect !== null) {
      return (<Redirect to={this.state.redirect}/>);
    } else if (this.type === 'anime'){
      if (this.path.includes('.')) {
        return this.renderVideo('/api/'+this.type+'/'+this.path);
      } else {
        return (<AnimeViewer path={this.path}/>);
      }
    } else if (this.type === 'movies') {
      return this.renderVideo('/api/'+this.type+'/'+this.path);
    } else {
      return (<p>Loading...</p>);
    }
  }
  renderVideo(url) {
    return (
      <div className='viewer'>
        <Player onEnd={this.onEnd} className='center' source={url}/>
      </div>
    );
  }
  onEnd(e){
    console.log('endeded',this.type);
    switch(this.type) {
      case null:
        break;
      case 'movies':
        return this.setState(Object.assign({},this.state,{redirect:'/movies'}));
    }
  }
}
export default withRouter(connect()(Viewer));
