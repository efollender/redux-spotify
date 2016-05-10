import React, {PropTypes, Component} from 'react';
import {shouldPureComponentUpdate} from 'react-pure-render/function';
import StyleSheet from './Track.styl';

export default class CurrentTrack extends Component {
	shouldComponentUpdate = shouldPureComponentUpdate;

	static propTypes = {
		data: PropTypes.object
	};
	render() {

		return (
			<div className={StyleSheet.currentTrack}>
				<span className="track-title">{this.props.data.title}</span>
				<span className="track-artist">{this.props.data.artist}</span>
			</div>
		);
	}
}