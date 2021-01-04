import React, { useState, useEffect, createContext } from 'react';
import axios from "axios";

import { NewsBanner } from './pages/NewsBanner';
import { NewsDetails } from './pages/NewsDetails';
import {NavBar} from './components/NavBar/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

const categorySource = [
  {
    category: 'General',
    imageId: '1566378246598-5b11a0d486cc'
  },
  {
    category: 'Technology',
    imageId: '1478358161113-b0e11994a36b'
  },
  {
    category: 'Sports',
    imageId: '1521412644187-c49fa049e84d'
  },
  {
    category: 'Health',
    imageId: '1526256262350-7da7584cf5eb'
  },
  {
    category: 'Business',
    imageId: '1542222024-c39e2281f121'
  },
  {
    category: 'Entertainment',
    imageId: '1511671782779-c97d3d27a1d4'
  },
  {
    category: 'Science',
    imageId: '1507413245164-6160d8298b31'
  },
];

export const NewsContext = createContext();

function App() {

  const [newsList, setNewsList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('General');
  const [selectedNews, setSelectedNews] = useState([]);

  const fetchNewsData = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=gb&category=${selectedCategory}&apiKey=2fbc4798c09449bcb159c5036e39d461` // YOUR API KEY FROM NEWSAPI
    );
    setNewsList(response?.data?.articles);
  };
  console.log(newsList);
  useEffect(() => {
    fetchNewsData();
  }, [selectedCategory]);


  return (
    <BrowserRouter>
      <NewsContext.Provider value={{newsList, setNewsList, categorySource, selectedCategory, setSelectedCategory, selectedNews, setSelectedNews }}>
        <NavBar />
        <Switch>
          <Route path='/details' component={NewsDetails} exact />
          <Route path='/' component={NewsBanner} />
        </Switch>
      </NewsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
