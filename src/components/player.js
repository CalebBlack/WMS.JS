import React from 'react';
import './player.less';

class Player extends React.Component {
  constructor(props){
    super(props);
    this.setupPlayer = this.setupPlayer.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.setup = false;
    this.state = {playing:false,time:0};
  }
  render(){
    return (
      <div ref={ref=>{this.player = ref;this.setupPlayer();}} className={'player'+(this.props.className && this.props.className ? " "+this.props.className : '')}>
        <video ref={ref=>{this.video = ref;this.setupPlayer();}}>
          <source src={this.props.source}/>
        </video>
      </div>
    );
  }
  setupPlayer(){
    if (this.setup !== true && this.video && this.player) {
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

      this.setup = true;
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
  onEnd(){
    
  }
}

export default Player;
