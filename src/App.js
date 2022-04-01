import 'normalize.css';
import NewsList from './components/NewsList';
import SearchBar from './components/SearchBar';

function App() {
	return (
		<div className="App">
			<SearchBar />
			<NewsList />
		</div>
	);
}

export default App;
