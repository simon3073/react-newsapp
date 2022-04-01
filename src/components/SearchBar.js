import React from 'react';

const SearchBar = (props) => {
	return (
		<header className="header">
			<h2 className="title">Search The News</h2>
			<input type="text" id="filter" placeholder="What do you need to know??" />
			<button>Give me the news!</button>
		</header>
	);
};

export default SearchBar;
