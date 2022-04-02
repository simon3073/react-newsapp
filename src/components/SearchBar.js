import React, { useState, useEffect } from 'react';

const SearchBar = (props) => {
	let textInput = React.createRef();

	function handleClick() {
		props.buttonClick(textInput.current.value);
	}

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			props.buttonClick(textInput.current.value);
		}
	};

	return (
		<header className="header">
			<h2 className="title">Search The News</h2>
			<input ref={textInput} type="text" id="search" placeholder="What do you need to know??" onKeyUp={handleKeyPress} />
			<button onClick={handleClick}>Search for news</button>
		</header>
	);
};

export default SearchBar;
