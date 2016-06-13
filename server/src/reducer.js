import * as actions from './actions';

import {
	addTrack,
	next,
	pause,
	play,
	setPlaylist,
	INITIAL_STATE
} from './core';

export default function reducer(state=INITIAL_STATE, action) {
	console.log(action);
	switch(action.type) {
		case actions.ADD_TRACK:
			return addTrack(state, action.track);
		case actions.NEXT:
			return next(state);
		case actions.PAUSE:
			return pause(state);
		case actions.PLAY:
			return play(state);
		case actions.SET_PLAYLIST:
			return setPlaylist(state, action.tracks);
		default:
			return state;
	}
}