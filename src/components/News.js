import React, { useEffect, useState } from 'react';
import './css/News.css';
import Nav from './Nav';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import axios from 'axios';
import logo from './Images/My Logo Balck.png'

const News = () => {
  const [ndata, setNdata] = useState([]);
  const [error, setError] = useState(null);

  const news_data = async() => {
    const api ='https://newsapi.org/v2/everything?q=tesla&apiKey=194bc3ea605b48bf96cc64cab7eec7cb'
    
   try{
        const response = await axios.get(api,{ headers: { 'Upgrade': 'h2c' } })
        
        if(response){
            // console.log("Local Api Feteched"+response.data)
            const news=(response)    
            console.log(news.data.articles)
            setNdata(news.data.articles)
        }
   }
   catch(error){
        console.log(error);
        setError(error)
   }
  };

  useEffect(() => {
    news_data();
  }, []);

  return (
    <div className='all-news'>
      <Nav />
      {error ? (
        <div className='error-message'>{error}</div>
      ) : (
        ndata.map((info,index) => (
          
            info.author != null ?  
          (
            
          <div key={index} className='news'>
            <div className='news-image'>
              
              <img className='news-img' height={250} width={250} src={(info.urlToImage)!=null? info.urlToImage : logo} alt='' />
            </div>
            <div className='news-content'>
              <div className='headline'>{info.title}</div>
              <div className='news-story'>
                {info.content}
                <br />
                {/* {info.description} */}
                <a href={info.url} target='_blank' rel='noopener noreferrer'>
                  Readmore<FaArrowRight />
                </a>
              </div>
              <div className='post-details'>
                <div className='posted-by'>Post By: {info.author}</div>
                <div className='date-time'>Posted on: {info.publishedAt} {info.time}</div>
              </div>
            </div>
          </div>)
          :
          <></>
        ))
      )}
      <div className='footer' id='footer'>
        <div className='icons'>
          <a href='https://github.com/dsak789'>
            <FaGithub />
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href='https://www.linkedin.com/in/saiajithkumardannana'>
            <FaLinkedin />{' '}
          </a>
        </div>
        <p>
          Made by Dannana Sai Ajith Kumar | Copyright &copy; by DSAK789 | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default News;
