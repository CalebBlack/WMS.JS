import React from 'react';
import './player.less';

class Player extends React.Component {
  constructor(props){
    super(props);
    this.setupPlayer = this.setupPlayer.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.fullscreen = this.fullscreen.bind(this);
    this.playerSetup = false;
  }
  render(){
    return (
      <div ref={ref=>{this.player = ref;this.setupPlayer();}} className={'player'+(this.props.className && this.props.className ? " "+this.props.className : '')}>
        <video autoPlay controls ref={ref=>{this.video = ref;this.setupPlayer();}}>
          <source src={this.props.source}/>
        </video>
        {this.props && this.props.children ? this.props.children : null}
      </div>
    );
  }
  setupPlayer(){
    if (this.playerSetup !== true && this.video && this.player) {
      this.video.addEventListener('click',()=>{
        this.state.playing ? this.pause() : this.play();
      });
      this.video.addEventListener('play',()=>{
        this.setState(Object.assign({},this.state,{playing:true}));
      });
      this.video.addEventListener('pause',()=>{
        this.setState(Object.assign({},this.state,{playing:false}));
      });
      this.video.addEventListener('ended',this.onEnd);
      this.playerSetup = true;
    }
  }
  pause(){
    if (this.video) {
      this.video.pause();
    }
  }
  play(){
    if (this.video) {
      this.video.play();
    }
  }
  fullscreen(){
    if (this.video) {
      if (this.video.requestFullscreen) {
        this.video.requestFullscreen();
      } else if (this.video.mozRequestFullScreen) {
        this.video.mozRequestFullScreen();
      } else if (this.video.webkitRequestFullscreen) {
        this.video.webkitRequestFullscreen();
      }
    }
  }
  onEnd(event){
    if (this.props && typeof this.props.onEnd == 'function') {
      this.props.onEnd(event);
    }
  }
}

export default Player;
