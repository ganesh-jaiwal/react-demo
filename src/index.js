import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD0sGGH3AXnb75C4RoDj3vIxK1vEuc_WVs';

// Create new component.

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'MostlySane'}, ( videos ) => {
			this.setState({ videos });
		});
	}
	render () {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

// Render abow generated component into the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
