import React, {PropTypes, Component} from 'react';
import {shouldPureComponentUpdate} from 'react-pure-render/function';
import StyleSheet from './Track.styl';
import classNames from 'classnames';

export default class Track extends Component {
	shouldComponentUpdate = shouldPureComponentUpdate;

	static propTypes = {
		data: PropTypes.object,
		width: PropTypes.object,
		onClick: PropTypes.func
	};
	formatTime(millis) {
	  const minutes = Math.floor(millis / 60000);
	  const seconds = ((millis % 60000) / 1000).toFixed(0);
	  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
	}
	render() {
		const {title, artist, duration} = this.props.data;
		const width = this.props.width || {width:''};
		return (
			<div className={classNames([StyleSheet.track], {
							disabled: this.props.inPlaylist
						})} 
						style={width}
						onClick={this.props.onClick}>
				<span className="track-title">{title}</span>
				<span className="track-artist">{artist}</span>
				<span className="track-duration">{this.formatTime(duration)}</span>
			</div>
		);
	}
}