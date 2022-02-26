import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadLine = () => {
      const [articles, setArticles] = useState([]);
      useEffect (()=>{
            const urls = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=db8817813e1e4d249c5767c414cc19ec'
            fetch(urls)
            .then(res => res.json())
            .then(data => setArticles(data.articles))
      },[])
      return (
            <div>
                <h2>Top headLines : {articles.length}</h2>  
                {
                      articles.map(article => <News article ={article}></News>)
                }
            </div>
      );
};

export default TopHeadLine;