import * as actions from './constants';

export function next() {
	return {
		type: actions.NEXT,
		meta: {
			remote: true
		}
	};
}

export function addTrack(track) {
	console.log('adding');
	return {
		type: actions.ADD_TRACK,
		track: track,
		meta: {
			remote: true
		}
	};
}

export function pause() {
	return {
		type: actions.PAUSE,
		meta: {
			remote: true
		}
	};
}

export function play() {
	return {
		type: actions.PLAY,
		meta: {
			remote: true
		}
	};
}

export function searchRequest(query) {
	return {
		type: actions.SEARCH_REQUEST,
		query: query
	};
}

export function searchSuccess(response) {
	return {
		type: actions.SEARCH_SUCCESS,
		response: response.data.tracks.items
	};
}

export function searchError(error) {
	return {
		type: actions.SEARCH_ERROR,
		error: error
	};
}

export function setState(state) {
	return {
		type: actions.SET_STATE,
		data: state
	};
}

export function toggleSearch(state) {
	return {
		type: actions.TOGGLE_SEARCH
	};
}