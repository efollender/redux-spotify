import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import remoteActionMiddleWare from './remote_action_middleware';
import {setState} from './action_creators';
import io from 'socket.io-client';

const socket = io(`http://27c4dcba.ngrok.io`);

socket.on('state', state => {
	store.dispatch(setState(state))
});

const createStoreWithMiddleware = applyMiddleware(
	remoteActionMiddleWare(socket), thunk
	)(createStore);

export const store = createStoreWithMiddleware(reducer);

