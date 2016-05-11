import {List, Map, fromJS} from 'immutable';
import axios from 'axios';

export const INITIAL_STATE = Map();

function formatTrack(track) {
	return Map({
		title: track.name,
		id: track.id,
		image: track.album.images[0].url,
		artist: track.artists[0].name,
		duration: track.duration_ms,
		uri: track.uri
	});
}

export function setPlaylist(state, playlist) {
	let tracks = List();
	[].slice.call(playlist.tracks.items).forEach(track => {
		tracks = tracks.push(formatTrack(track));
	});
	return state.set('playlist', tracks);
}

export function addTrack(state, track) {
	let playlist = state.get('playlist');
	if (!playlist.contains(track.id)) {
		return state.merge({
			playlist: playlist.push(fromJS(track))
		});
	}
	return state;
}

export function next(state) {
	const playlist = state.get('playlist');
	const previous = state.get('current');
	return state.merge({
		playlist: playlist.skip(1),
		current: playlist.take(1),
		previous: previous
	});
}

export function pause(state) {
	return state.merge({
		paused: true
	});
}

export function play(state) {
	return state.merge({
		paused: false
	});
}


