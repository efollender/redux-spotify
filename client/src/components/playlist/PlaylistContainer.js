import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {shouldPureComponentUpdate} from 'react-pure-render/function';
import Track from './Track';
import StyleSheet from './Playlist.styl';
import CurrentTrack from './CurrentTrack';
import * as actionCreators from '../../action_creators';

const mapStateToProps = state => {
	return {
		playlist: state.get('playlist'),
		paused: state.get('paused'),
		current: state.get('current')
	};
}

export class Playlist extends Component {
	shouldComponentUpdate = shouldPureComponentUpdate;
	static propTypes = {
		playlist: PropTypes.object,
		paused: PropTypes.bool,
		current: PropTypes.object
	};
	getTracks() {
		return this.props.playlist ? this.props.playlist.toJS() : [];
	}
	handlePause() {
		console.log(this.props.paused);
		return this.props.paused ? this.props.play : this.props.pause;
	}
	getMaxDuration() {
		const lengths = this.getTracks().map(track => {
			return track.duration;
		});
		return Math.max(...lengths);
	}
	setTrackWidth(track) {
		const max = this.getMaxDuration();
		const width = (track.duration/max) * 100;
		return {width: `${width}%`};
	}
	render() {
		const {current, paused} = this.props;
		const image = current ? current.toJS()[0].image : '';
		return (
			<div className={StyleSheet.playlist}>
				<div className="background-album"
					style={{backgroundImage: `url(${image})`}} />
				<div 	className={classNames('fa', {
					'fa-play': paused,
					'fa-pause': !paused
				})} 
							onClick={::this.handlePause()}/>
				<div className="skip" onClick={this.props.next}><h4>SKIP</h4></div>
				{current && 
					<CurrentTrack data={current.toJS()[0]} />
				}
				<div className="tracks">
					{this.getTracks().map((track, index) => {
						return (
						<Track 
							key={`playlist-${index}`} 
							data={track} 
							width={this.setTrackWidth(track)} />
						);
					})}
				</div>
			</div>
		);
	}
}

export const PlaylistContainer = connect(mapStateToProps, actionCreators)(Playlist);