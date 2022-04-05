import React, { useState } from 'react';
import NewsList from './components/NewsList';
import SearchBar from './components/SearchBar';

function App() {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSubmit = (passedSearchTerm) => {
		setSearchTerm(passedSearchTerm);
	};

	return (
		<div className="App">
			<SearchBar submitSearch={handleSubmit} />
			<NewsList searchTerm={searchTerm} />
		</div>
	);
}

export default App;
