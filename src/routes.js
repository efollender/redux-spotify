import React from 'react';
import {Route, Router, hashHistory} from 'react-router';
import App from './components/App';
import {PlaylistContainer} from './components/playlist/PlaylistContainer';

export default (
<Router history={hashHistory}>
	<Route component={App}>
		<Route path="/" component={PlaylistContainer} />
	</Route>
</Router>
);