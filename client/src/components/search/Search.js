import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {store} from '../../store';
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';
import {search} from '../../actions';
import StyleSheet from './Search.styl';
import Track from '../playlist/Track';
import * as actionCreators from '../../action_creators';

const mapStateToProps = state => {
	return {
		results: state.getIn(['search', 'results']),
		query: state.getIn(['search', 'query']),
		searchOpen: state.get('searchOpen'),
		playlist: state.get('playlist')
	};
}

class Search extends Component {
	static propTypes = {
		results: PropTypes.object,
		query: PropTypes.string,
		searchOpen: PropTypes.bool,
		playlist: PropTypes.object
	};
	getResults() {
		return this.props.results ? this.props.results.toJS() :  [];
	}
	getPlaylist() {
		return this.props.playlist ? this.props.playlist.toJS() :  [];
	}
	inPlaylist(track) {
		const trackIds = this.getPlaylist().map(track => {
			return track.id;
		});
		if (trackIds.indexOf(track.id) > -1) {
			return true;
		};
		return false;
	}
	addTrack(track) {
		console.log(';checl', this.inPlaylist(track));
		if(!this.inPlaylist(track)) this.props.addTrack(track);
	}
	handleSubmit(e) {
		e.preventDefault();
		const query = findDOMNode(this.refs.query).value;
		store.dispatch(search(query));
	}
	render() {
		return (
			<div className={classNames([StyleSheet.search], {
				open: this.props.searchOpen
			})}>
				<div className="inner-wrapper">
					<form className="query-wrapper" 
								onSubmit={(e) => this.handleSubmit(e)}>
						<input ref="query" type="text" name="query"/>
					</form>
					<div className="results">
						{this.getResults().map(track => {
							return (
								<Track
									onClick={() => this.addTrack(track)}
									inPlaylist={this.inPlaylist(track)}
									key={`result-${track.id}`} 
									data={track}/>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

export const SearchContainer = connect(mapStateToProps, actionCreators)(Search);