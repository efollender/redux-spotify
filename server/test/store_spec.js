import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import makeStore from '../src/store';

describe('store', () => {

	it('is a Redux store configured with the correct reducer', () => {
		const store = makeStore();
		expect(store.getState()).to.equal(Map());

		store.dispatch({
			type: 'ADD_TRACK',
			track: fromJS({
				name: 'song name',
				artist: 'artist name', 				
				album: 'album name',
				duration: 'duration', 
				link: 'song link',
				id: 12334
			})
		});
		expect(store.getState()).to.equal(fromJS({
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

});