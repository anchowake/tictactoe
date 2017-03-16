import React, { Component } from 'react';

export default class Announcement extends Component {
	render(){
		return(
			<div>
				<h2 className={this.props.winner ? 'visible' : 'hidden'}>
					{(this.props.winner == 'draw') ? this.props.winner : 'The winner is: ' + this.props.winner}
				</h2>
				<h2 className={this.props.winner ? 'hidden' : ''}>
					{this.props.invalid ? this.props.invalid : 'Current Turn: ' + this.props.turn}
				</h2>
			</div>
		)
	}
}