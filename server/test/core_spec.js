import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import {
	addTrack,
	play,
	next,
	pause
} from '../src/core';

describe('application logic', () => {

	describe('addTrack', () {

		it('adds a track to the playlist', () => {
			const state = {playlist: List()};
			const track = fromJS({
				name: 'song name',
				artist: 'artist name', 				
				album: 'album name',
				duration: 'duration', 
				link: 'song link',
				id: 12334
			});
			const nextState = addTrack(state, track);
			expect(nextState).to.equal(fromJS({
				playlist: [
					{
						name: 'song name',
						artist: 'artist name', 				
						album: 'album name',
						duration: 'duration', 
						link: 'song link',
						id: 12334
					}
				]
			}));
		});

		it('doesn\'t add a track if it already is in the playlist', () => {

		});

	});

	describe('next', () => {

		it('changes the current track to the next in the playlist', () {

		});

		it('removes the track from the playlist', () => {

		});

	});

	describe('pause', () => {

		it('sets pause to true', () => {

		});

	});

	describe('play', () => {

		it('sets pause to false', () => {

		});

	});


});