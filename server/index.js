import makeStore from './src/store';
import startServer from './src/server';
import SpotifyHandler from './src/spotifyUtil';

export const store = makeStore();
const spotify = new SpotifyHandler();
startServer(store);

store.dispatch({
	type: 'SET_PLAYLIST',
	tracks: require('./tracks.json')
});
