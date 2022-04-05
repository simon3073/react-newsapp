import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

const NewsList = (props) => {
	const [articles, setArticles] = useState([]);
	const [promptDisplay, setPromptDisplay] = useState('show');
	const [newsHeaderDisplay, setNewsHeaderDisplay] = useState('hide');

	useEffect(() => {
		console.log(props.searchTerm);
		if (props.searchTerm) {
			const getArticles = async () => {
				const response = await axios.get('https://newsapi.org/v2/everything?q=' + props.searchTerm + '&apiKey=b9f90b5977864398bddf03a94244e003');
				setPromptDisplay('hide');
				setNewsHeaderDisplay('show');
				setArticles(response.data.articles);
			};
			getArticles();
		} else {
			setPromptDisplay('show');
			setNewsHeaderDisplay('hide');
			setArticles([]);
		}
	}, [props.searchTerm]);

	return (
		<div className="news-articles">
			<div className={promptDisplay}>
				<h3>Enter a search term to get started...</h3>
			</div>
			<h4 className={newsHeaderDisplay}>
				News about... <span className="uppercase">{props.searchTerm}</span>
			</h4>
			{articles.map((articles) => {
				return <NewsItem title={articles.title} description={articles.description} url={articles.url} urlToImage={articles.urlToImage} />;
			})}
		</div>
	);
};

export default NewsList;
