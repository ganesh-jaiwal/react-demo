import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD0sGGH3AXnb75C4RoDj3vIxK1vEuc_WVs';

// Create new component.

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// Render abow generated component into the DOM.
 ReactDOM.render(<App />, document.querySelector('.container'));
