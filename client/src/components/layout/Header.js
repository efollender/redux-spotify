import React, {Component} from 'react';
import {connect} from 'react-redux';
import Track from '../playlist/Track';
import * as actionCreators from '../../action_creators';
import {shouldPureComponentUpdate} from 'react-pure-render/function';


const mapStateToProps = state => {
	return {
		previous: state.get('previous')
	};
}

export class Header extends Component {
	shouldComponentUpdate = shouldPureComponentUpdate;
	render() {
		return (
			<div className="header">
				<div className="logo">
					Score
				</div>
				{this.props.previous &&
					<div className="current">
						<Track data={this.props.previous.toJS()[0]}/>
					</div>
				}
				<div className="search">
					<span className="fa fa-search"
								onClick={this.props.toggleSearch} />
				</div>
			</div>
		);
	}
}

export const HeaderContainer = connect(mapStateToProps, actionCreators)(Header);

