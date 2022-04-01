import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

const NewsList = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const getArticles = async () => {
			const response = await axios.get('https://newsapi.org/v2/everything?q=fiorentina&apiKey=b9f90b5977864398bddf03a94244e003');
			console.log(response);
			setArticles(response.data.articles);
		};
		getArticles();
	}, []);

	return (
		<div>
			{articles.map((articles) => {
				return <NewsItem title={articles.title} description={articles.description} url={articles.url} urlToImage={articles.urlToImage} />;
			})}
		</div>
	);
};

export default NewsList;
