import React from 'react';

const PlayerPanel = (props) => {
	if(props.P1Win === true) {
		if(props.player === "1") {
			return(
				<div>
					Player 1
					<div className="outcome">WINNER</div>
				</div>
			);
		}
		else {
			return(
				<div>
					Player 2
					<div className="outcome">LOSER</div>
				</div>
			);
		}
	}
	else if(props.P2Win === true) {
		if(props.player === "2") {
			return(
				<div>
					Player 2
					<div className="outcome">WINNER</div>
				</div>
			);
		}
		else {
			return(
				<div>
					Player 1
					<div className="outcome">LOSER</div>
				</div>
			);
		}
	}
	else if(props.tie === true) {
		return(
			<div>
				Player {props.player}
				<div className="outcome">TIE</div>
			</div>
		);
	}
	else {
		return(
			<div>
				Player {props.player}
			</div>
		);
	}
}

export default PlayerPanel;