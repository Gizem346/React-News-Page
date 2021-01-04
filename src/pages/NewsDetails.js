import React, { useContext } from 'react';
import { NewsList } from '../components/NewsList/NewsList';
import { NewsContext } from '../App';
import "./NewsDetails.style.css";
import { Link } from 'react-router-dom';

export const NewsDetails = () => {

    const { newsList, setSelectedNews, selectedNews, selectedCategory } = useContext(NewsContext);
    console.log(selectedNews);


    return (
        <div className='newsContainer'>
            <div className='newsDetail'>
                <h2 style = {{textAlign:'center'}}>{selectedNews?.title}</h2>
                
                {selectedNews?.urlToImage == undefined ?
                    <img src='https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg' alt='Link Error' /> :
                    <img className='bannerImage' src={selectedNews?.urlToImage} alt='NewsImage' />
                }

                <p style = {{textAlign:'center'}}>{selectedNews?.description}</p>

                <Link style={{ color: '#ab000d', fontWeight:'bold', textDecoration: 'none', paddingBottom:'20px' }} to={{ pathname: `${selectedNews.url}` }} target="_blank">Go to details...</Link>

            </div>

            <div className='newsCardContainer'>
                <h3>Other {selectedCategory} News</h3>
                <div className='newsCard'>
                    <NewsList newsList={newsList} setSelectedNews={setSelectedNews} />
                </div>
            </div>

        </div>
    )
}