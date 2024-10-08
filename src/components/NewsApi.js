import React, { useEffect, useState } from 'react';
import './css/News.css';
import Nav from './Nav';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import axios from 'axios';

const News = () => {
  const [ndata, setNdata] = useState([]);
  const [error, setError] = useState(null);

  const news_data = async() => {
    const api ='https://inshortsapi.vercel.app/news?category=all';
    fetch(api)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data.data);
        setNdata(data.data);
      })
      .catch((error) => {
        console.error('Error fetching news data:', error);
        setError('Failed to fetch news data. Please try again later.');
      });
  };

  useEffect(() => {
    news_data();
  }, []);

  return (
    <div>
      <div>
        <div className='all-news'>
          <Nav />
          {error ? (
            <div className='error-message'>{error}</div>
          ) : (
            ndata.map((info) => (
              <div key={info.title} className='news'>
                <div className='news-image'>
                  <img className='news-img' height={250} width={250} src={info.imageUrl} alt='' />
                </div>
                <div className='news-content'>
                  <div className='headline'>{info.title}</div>
                  <div className='news-story'>
                    {info.content}
                    <br />
                    {/* {info.description} */}
                    <a href={info.readMoreUrl} target='_blank' rel='noopener noreferrer'>
                      Readmore<FaArrowRight />
                    </a>
                  </div>
                  <div className='post-details'>
                    <div className='posted-by'>Post By: {info.author}</div>
                    <div className='date-time'>Posted on: {info.date} {info.time}</div>
                  </div>
                </div>
              </div>
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
              Made by Dannana Sai Ajith Kumar | Copyright &copy; by SAK789 | All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
