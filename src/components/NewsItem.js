import React from 'react';
import './newsitem.css';

const NewsItem = (props) => {
	return (
		<div className="news-app">
			<div className="news-item">
				<img className="news-img" src={props.urlToImage} alt={props.urlToImage} />
				<h3>
					<a href={props.url}>{props.title}</a>
				</h3>
				<p>{props.description}</p>
			</div>
		</div>
	);
};

export default NewsItem;
