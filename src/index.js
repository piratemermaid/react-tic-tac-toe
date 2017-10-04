import React from 'react';
import ReactDOM from 'react-dom';

import Grid from './components/grid';
import PlayerPanel from './components/player_panel';
import NewGameBtn from './components/new_game_btn';

class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = { tiles: [
				{ id: 1, X: false, O: false, clicked: false },
				{ id: 2, X: false, O: false, clicked: false },
				{ id: 3, X: false, O: false, clicked: false },
				{ id: 4, X: false, O: false, clicked: false },
				{ id: 5, X: false, O: false, clicked: false },
				{ id: 6, X: false, O: false, clicked: false },
				{ id: 7, X: false, O: false, clicked: false },
				{ id: 8, X: false, O: false, clicked: false },
				{ id: 9, X: false, O: false, clicked: false }
			],
			turnNumber: 0,
			gameEnded: false,
			P1Win: false,
			P2Win: false,
			tie: false
		};
	}

	tileClicked(id) {
		var index = id - 1;
		var newTile = this.state.tiles;
		if(this.state.turnNumber % 2 === 0) {
			newTile[index].X = true;
			newTile[index].O = false;
		}
		else {
			newTile[index].O = true;
			newTile[index].X = false;
		}
		this.setState({ tiles: newTile });
		newTile[index].clicked = true;

		if(this.state.turnNumber > 3) {
			this.checkWin();
		}
		
		this.setState({ turnNumber: this.state.turnNumber + 1 });

		console.log(this.state.turnNumber);
		if(this.state.turnNumber === 8) {
			this.setState({ tie: true });
		}
	}

	checkWin() {
		// check rows
		this.checkThree(1, 2, 3);
		this.checkThree(4, 5, 6);
		this.checkThree(7, 8, 9);

		// check columns
		this.checkThree(1, 4, 7);
		this.checkThree(2, 5, 8);
		this.checkThree(3, 6, 9);

		// check diagonals
		this.checkThree(1, 5, 9);
		this.checkThree(3, 5, 7);
	}

	checkThree(a, b, c) {
		var tiles = this.state.tiles;
		if(tiles[a-1].X === true && tiles[b-1].X === true && tiles[c-1].X === true) {
			console.log('p1 wins');
			this.setState({ gameEnded: true, P1Win: true });
			console.log(this.state.P1Win);
		}
		else if(tiles[a-1].O === true && tiles[b-1].O === true && tiles[c-1].O === true) {
			console.log('p2 wins');
			this.setState({ gameEnded: true, P2Win: true });
		}
	}

	render() {
		return(
			<div>
				<div className="col-md-4 text-center">
					<PlayerPanel player="1"
						P1Win={this.state.P1Win}
						P2Win={this.state.P2Win}
						tie={this.state.tie} />
				</div>
				<div className="col-md-4 text-center">
					<Grid
						tiles={this.state.tiles}
						tileClicked={this.tileClicked.bind(this)}
						gameEnded={this.state.gameEnded} />
					<NewGameBtn />
				</div>
				<div className="col-md-4 text-center">
					<PlayerPanel
						player="2"
						P1Win={this.state.P1Win}
						P2Win={this.state.P2Win}
						tie={this.state.tie} />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
