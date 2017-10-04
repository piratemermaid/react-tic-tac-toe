import React from 'react';

const PlayerPanel = (props) => {
	if(props.tie === true) {
		return(
			<div>
				Player {props.player}
				<div className="tie-panel">TIE</div>
			</div>
		);
	}
	else if(props.P1Win === true && props.player === "1"){
		return(
			<div>
				PLAYER 1 WINS WHOOO
			</div>
		);
	}
	else if(props.P2Win === true && props.player === "2"){
		return(
			<div>
				PLAYER 2 WINS WHOOO
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