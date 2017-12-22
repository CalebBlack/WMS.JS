import React from 'react';
import Player from '../components/player';
import './viewer.less';

class Viewer extends React.Component {
  render(){
    let url = this.props && this.props.location && this.props.location.pathname ? this.props.location.pathname : null;
    if (url) {
      let parts = url.split('/').filter(part=>part);
      let type = parts[0];
      let path = parts.slice(1).join('/');
      console.log(type,path);
      return (
        <div className='viewer'>
          <Player className='center' source={'/api/'+type+'/'+path}/>
        </div>
      );
    } else {
      return (<p>Loading...</p>);
    }
  }
}
export default Viewer;
