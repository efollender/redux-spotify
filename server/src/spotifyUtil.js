import Spotify from 'spotify';
import lame from 'lame';
import EventEmitter from 'events';
import Speaker from 'speaker';

const username = process.argv[2];
const password = process.argv[4];

function authSpotify(user, pass, (err, spotify) => {
  if (err) throw err;
  return spotify;
});

export default class SpotifyHandler extends EventEmitter {
  constructor() {
    super(props);

    authSpotify(username, password, (spotify) => {
      this.spotify = spotify;
    });
    this.currentTrack = null;
  }
  play() {
    const currentTrack = this.currentTrack;
    this.spotify.get(track.uri, (err, song) => {
      if (err) {
        this.error = err;
        throw err;
      }
      song.play()
        .pipe(new lame.Decoder())
        .pipe(new Speaker())
        .on('finish', () => {
          this.emit('track ended');
        });
    });
  }
  
}