import Spotify from 'spotify';
import lame from 'lame';
import io from 'socket.io-client';
import Speaker from 'speaker';
import * as actions from './actions';

const username = process.argv[2];
const password = process.argv[4];

function authSpotify(user, pass, (err, spotify) => {
  if (err) throw err;
  return spotify;
});

export default class SpotifyHandler {
  constructor() {
    this.socket = io(`${location.protocol}//${location.hostname}:8090`);
    this.socket.on('state', state => this.handleState(state));

    authSpotify(username, password, (spotify) => {
      this.spotify = spotify;
    });
  }
  play() {
    const currentTrack = this.state.current;
    this.spotify.get(currentTrack.uri, (err, song) => {
      if (err) {
        this.error = err;
        throw err;
      }
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
    this.socket.emit('action', actions.NEXT);
  }
  handleState(state) {
    this.state = state;
    // this.state.paused ? this.handlePause;
    this.play();
  }
}