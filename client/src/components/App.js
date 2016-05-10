import React, {Component} from 'react';
import {List, Map} from 'immutable';
import StyleSheet from './App.styl';
import {HeaderContainer} from './layout/Header'; 
import {SearchContainer} from './search/Search'; 

export default class App extends Component {
	
	render() {
		return (
			<div className={StyleSheet.wrapper}>
				<div className="content-wrapper">
					<HeaderContainer/>
					{this.props.children}
				</div>
				<SearchContainer/>
			</div>
		);
	}
}
