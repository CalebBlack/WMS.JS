import React from 'react';
import './player.less';

class Player extends React.Component {
  constructor(props){
    super(props);
    this.setupPlayer = this.setupPlayer.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.renderControls = this.renderControls.bind(this);
    this.renderToggleButton = this.renderToggleButton.bind(this);
    this.setupControls = this.setupControls.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.fullscreen = this.fullscreen.bind(this);
    this.controlsSetup = false;
    this.playerSetup = false;
    this.state = {playing:false,time:0,controlsHovered:false};
  }
  render(){
    return (
      <div ref={ref=>{this.player = ref;this.setupPlayer();}} className={'player'+(this.props.className && this.props.className ? " "+this.props.className : '')}>
        <video controls ref={ref=>{this.video = ref;this.setupPlayer();}}>
          <source src={this.props.source}/>
        </video>
        {this.props && this.props.children ? this.props.children : null}
      </div>
    );
  }
  renderControls(){
    return (
      <div ref={ref=>{this.setupControls(ref);}} className={'controls '+(this.state.playing === false || this.state.controlsHovered ? 'active':'inactive')}>
        {this.renderToggleButton()}
        <div onClick={this.fullscreen} className='fullscreen'>⤬</div>
      </div>
    );
  }
  setupControls(controls){
    if (controls && this.controlsSetup !== true) {
      this.controls = controls;
      controls.addEventListener('mouseover',()=>{
        this.setState(Object.assign({},this.state,{controlsHovered:true}));
      });
      controls.addEventListener('mouseout',()=>{
        this.setState(Object.assign({},this.state,{controlsHovered:false}));
      });
      this.controlsSetup = true;
    }
  }
  renderToggleButton(){
    if (this.state.playing === true) {
      return (<button onClick={this.pause} className='pause'><div className='left'/><div className='right'/></button>)
    } else {
      return (<button onClick={this.play} className='play'></button>)
    }
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
  onEnd(){

  }
}

export default Player;
