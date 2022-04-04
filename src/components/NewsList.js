import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import NewsItem from './NewsItem';

const NewsList = (props) => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		console.log(props.searchTerm);
		const getArticles = async () => {
			const response = await axios.get('https://newsapi.org/v2/everything?q=' + props.searchTerm + '&apiKey=b9f90b5977864398bddf03a94244e003');
			console.log(response);
			setArticles(response.data.articles);
		};
		getArticles();
	}, [props.searchTerm]);

	return (
		<div>
			<h4>News about {props.searchTerm}</h4>
			{/* {articles.map((articles) => {
				return <NewsItem title={articles.title} description={articles.description} url={articles.url} urlToImage={articles.urlToImage} />;
			})} */}
		</div>
	);
};

export default NewsList;
