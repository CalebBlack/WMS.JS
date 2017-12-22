import React from 'react';
import Player from '../components/player';
import {Redirect} from 'react-router-dom';
import './viewer.less';

class Viewer extends React.Component {
  constructor(props){
    super(props);
    this.onEnd = this.onEnd.bind(this);
    this.state = {redirect:null};
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
    } else if (this.url) {
      return (
        <div className='viewer'>
          <Player onEnd={this.onEnd} className='center' source={'/api/'+this.type+'/'+this.path}/>
        </div>
      );
    } else {
      return (<p>Loading...</p>);
    }
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
export default Viewer;
