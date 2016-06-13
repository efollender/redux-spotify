import NodeSpotify from 'node-spotify';
import io from 'socket.io-client';
import webAudio from 'web-audio-api';
import * as actions from './actions';
const {AudioContext, AudioBufferSourceNode} = webAudio;
const options = {
    appkeyFile: "./src/_appkey.key" //required
};

const username = process.argv[2];
const password = process.argv[3];

export default class SpotifyHandler {
  constructor() {
    this.socket = io(`http://localhost:8090`);
    this.socket.on('state', state => this.handleState(state));
    this.username = username;
    this.password = password;
    this.spotify = NodeSpotify(options);
    this.player = this.spotify.player;
    this.login();
    this.spotify.on({
      ready: () => {
        this.handleAudio();
      }
    });
  }
  handleAudio() {
    this.spotify.useNativeAudio();
  }
  login() {
    console.log('logging in');
    this.spotify.login(this.username, this.password, null, null);
  }
  play() {
    this.player.play(this.track);
    console.log('playing', this.player.currentSecond);
  }
  loadTrack() {
    const current = this.state.current[0];
    if (!current.uri) return false;
    this.track = this.spotify.createFromLink(current.uri);
    this.spotify.waitForLoaded([this.track], this.play.bind(this));
  }
  pause() {
    this.spotify.player.pause();
  }
  handleFinish() {
    this.socket.emit('action', {type: actions.NEXT});
  }
  handleState(state) {
    const oldState = this.state;
    this.state = state;
    if (oldState) {
      const last = oldState.current;
      if(last){
        if (this.state.current[0] !== last[0]) {
          this.loadTrack();
        }  
      }
    }
    if (this.state.paused) this.pause();
  }
}