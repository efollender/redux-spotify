import {List, Map} from 'immutable';
import * as ui from './constants';
import * as actions from './actions';

const {
		addTrack,
		setState,
		searchRequest,
		searchSuccess,
		searchError,
		toggleSearch,
		INITIAL_STATE
	} = actions;

export default function reducer(state=INITIAL_STATE, action) {
	console.log('state', state, 'action', action);
	switch(action.type) {
		case ui.SEARCH_REQUEST:
			return searchRequest(state, action.query);
		case ui.SEARCH_SUCCESS:
			return searchSuccess(state, action.response);
		case ui.SEARCH_ERROR:
			return searchError(state, action.error);
		case ui.SET_STATE:
			return setState(state, action.data);
		case ui.TOGGLE_SEARCH:
			return toggleSearch(state);
	}
	return state;
}