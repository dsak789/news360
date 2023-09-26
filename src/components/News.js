import React, { useEffect, useState } from 'react'
import './css/News.css'
import {FaArrowRight} from 'react-icons/fa'

const News = () => {

    const [ndata,setNdata]=useState([]);


    const news_data = () =>{
        fetch('https://inshortsapi.vercel.app/news?category=all')
        .then((res) => res.json())
        .then((data)=>{
                console.log(data.data);
                setNdata(data.data);
            })
    }

    useEffect(()=>{
        news_data()
    },[])

  return (
    <div>
        {/* <div className='categories'>
            <button>All</button>
        </div> */}
        <div>
            <div className='all-news'>
                <div className='logo'>
                    <h1>News 360<sup>o</sup> <sub>24/7</sub></h1>
                </div>
                {ndata.map((info)=>(    
                    <div className='news'>
                        <div className='news-image'>
                            <img className='news-img' height={250} width={250} src={info.imageUrl} alt=''/>
                        </div>
                        <div className='news-content'>
                            <div className='headline'>
                                {info.title}
                            </div>
                            <div className='news-story'>
                                {info.content}
                            <a href={info.readMoreUrl}>Readmore<FaArrowRight/></a></div>
                            
                            <div className='post-details'>
                                <div className='posted-by'>
                                Author: {info.author}
                                </div>
                                <div className='date-time'>
                                    Postedon: {info.date} {info.time}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>    
        </div>
    </div>
  )
}

export default News