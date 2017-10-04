import React from 'react';

const NewGameBtn = (props) => {
	return(
		<div className="row">
			<button className="new-game-btn" onClick={props.startNewGame}>New Game</button>
		</div>
	);
}

export default NewGameBtn;