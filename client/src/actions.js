import {Map, List, fromJS} from 'immutable';
import axios from 'axios';
import * as creators from './action_creators';


export const INITIAL_STATE = Map();

function formatTrack(track) {
	return new Map({
		title: track.name,
		id: track.id,
		image: track.album.images[0].url,
		artist: track.artists[0].name,
		duration: track.duration_ms,
		uri: track.uri
	});
}

export function searchRequest(state, query) {
	return state.merge({
		search: {
			query: query
		}
	});
}

export function searchSuccess(state, response) {
	let tracks = response.map(track => formatTrack(track));
	return state.merge({
		search: {
			results: tracks
		}
	});
}

export function searchError(state, ex) {
	return state.merge({
		search: {
			error: ex.data.error.message
		}
	});
}

export function search(query) {
	return async dispatch => {
		dispatch(creators.searchRequest(query));
		try {
			let response = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track&market=US`);
			dispatch(creators.searchSuccess(response));
		} catch (ex) {
			dispatch(creators.searchError(ex));
		}
	};
}

export function setState(state, newState) {
	return state.merge(newState);
}

export function toggleSearch(state) {
	let searchState = state.get('searchOpen');
	return state.merge({
		searchOpen: !searchState || false
	});
}