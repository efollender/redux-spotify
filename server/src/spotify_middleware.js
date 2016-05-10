import * as actions from './actions';
import SpotifyHandler from './spotifyUtil';

function reduce(store, action) {

	switch(action.type) {
		case actions.NEXT:
			SpotifyHandler.play()
		case actions.PAUSE:
			return pause(state);
		case actions.PLAY:
			return play(state);
		default:
			break;
	}

}