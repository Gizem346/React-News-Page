import React, { useContext, useState } from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Link } from 'react-router-dom';
import "./NewsBanner.style.css";
import { NewsContext } from '../App';



export const NewsBanner = () => {

  const { newsList, setSelectedNews, selectedCategory } = useContext(NewsContext);

  return (
    <Slider>
      {newsList?.map((news, index) =>

        <Link
          style={{ textDecoration: 'none' }}
          key={index}
          to='/details'
          onClick={() => {
            //console.log(news)
            setSelectedNews(news);
          }}
        >
          <h2 style={{ color:'#ab000d', textAlign: 'center' }}>{selectedCategory} News</h2>
          <div
            className='bannerContainer'
            key={index}
          >
            <h2>{news?.title}</h2>
            {news?.urlToImage == undefined ?
              <img src = 'https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg' alt = 'Link Error'/> :
              <img className='bannerImage' src={news?.urlToImage} alt = 'NewsImage'/>  
            }
          </div>
        </Link>
        
      )}
    </Slider>

  );
};
