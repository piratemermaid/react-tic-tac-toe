import React from 'react';

const Grid = (props) => {

	function tileClicked(id) {
		if(props.gameEnded === false) {
			props.tileClicked(id);
		}
	}

	const tiles = props.tiles.map((tile) => {
		if(tile.X === true) {
			return(
				<div key={tile.id}>
					<div className="col-md-4 tile">
						X
					</div>
				</div>
			);
		}
		else if(tile.O === true) {
			return(
				<div key={tile.id}>
					<div className="col-md-4 tile">
						O
					</div>
				</div>
			);
		}
		else {
			return (
				<div key={tile.id} onClick={tileClicked.bind(this, tile.id)} className="col-md-4 tile">
					
				</div>
			);
		}
	});

	return(
		<div className="col-md-12">
			<div className="grid">
				{tiles}
			</div>
		</div>
	);
}

export default Grid;