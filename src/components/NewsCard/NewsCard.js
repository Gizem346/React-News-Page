import React from 'react';
import './NewsCard.style.css';

export const NewsCard = ({newsList}) => {
    console.log(newsList);
    return (
        <div className = 'newsCardWrapper'>
            <p className = 'newsCardText'>{newsList?.title}</p>
        </div>
    )
}
