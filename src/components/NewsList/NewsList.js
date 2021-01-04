import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NewsCard } from "../NewsCard/NewsCard";
import './NewsList.style.css';

export const NewsList = ({ newsList, setSelectedNews }) => {


    return (
        <div className="newsCard">
            {newsList?.map((news, index) => (
                <Link
                    style = {{textDecoration:'none'}}
                    to='/details'
                    onClick={() => {
                        //console.log(news)
                        setSelectedNews(news);
                    }}
                >
                    <NewsCard
                        key={index}
                        newsList={news}
                    />
                </Link>
            ))}
        </div>
    )
}

