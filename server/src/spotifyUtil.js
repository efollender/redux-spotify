import Spotify from 'spotify-web';
import lame from 'lame';
import io from 'socket.io-client';
import Speaker from 'speaker';
import * as actions from './actions';

const username = process.argv[2];
const password = process.argv[3];

export default class SpotifyHandler {
  constructor() {
    this.socket = io(`http://localhost:8090`);
    this.socket.on('state', state => this.handleState(state));
    this.username = username;
    this.password = password;
    this.spotify = this.login();
  }
  login() {
    return Spotify.login(this.username, this.password, (err, spotify) => {
     return spotify;
    });
  }
  play() {
    const current = this.state.current[0];
    this.spotify.get(current.uri, (err, song) => {
      if (err) {
        this.error = err;
        throw err;
      }
      console.log('song', song);
      song.play()
        .pipe(new lame.Decoder())
        .pipe(new Speaker())
        .on('finish', this.handleFinish);
    });
  }
  pause() {
    this.spotify.track.pause();
  }
  handleFinish() {
    this.socket.emit('action', {type: actions.NEXT});
  }
  handleState(state) {
    this.state = state;
    // this.state.paused ? this.handlePause;
    if (this.spotify && this.state.current) this.play();
  }
}