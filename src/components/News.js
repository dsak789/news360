import React, { useEffect, useState } from 'react'
import './css/News.css'
import {FaArrowRight,FaGithub,FaLinkedin} from 'react-icons/fa'

const News = () => {

    const [ndata,setNdata]=useState([]);
    // const [disp,setdisp]=useState(false);


    const news_data = () =>{
        fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=194bc3ea605b48bf96cc64cab7eec7cb')
        .then((res) => res.json())
        .then((data)=>{
                console.log(data.data);
                setNdata(data.articles);
            })
    }

    // const show = ()=>{
    //     if(disp==false){
    //         setdisp(true)
    //     }
    //     if(disp==true){
    //         setdisp(false)
    //     }
    // }

    useEffect(()=>{
        news_data()
    },[])

  return (
    <div>
        {/* <div className='categories'>
            <button onClick={show}>All</button>
            {disp && <h1>Hello News Readers</h1>}
        </div> */}
        <div>
            <div className='all-news'>
                <div className='logo'>
                    <h1>News 360<sup>o</sup> <sub>24/7</sub></h1>
                </div>
                {ndata.map((info)=>(    
                    <div className='news'>
                        <div className='news-image'>
                            <img className='news-img' height={250} width={250} src={info.urlToImage} alt=''/>
                        </div>
                        <div className='news-content'>
                            <div className='headline'>
                                {info.title}
                            </div>
                            <div className='news-story'>
                                {info.description}<br/>
                                {info.content}
                            <a href={info.url}>Readmore<FaArrowRight/></a></div>
                            
                            <div className='post-details'>
                                <div className='posted-by'>
                                Post By: {info.author}
                                </div>
                                <div className='date-time'>
                                    Posted on: {info.publishedAt} 
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div class="footer" id="footer">
                    <div class="icons">
                        <a href="https://github.com/sbcreations14378" ><FaGithub/></a>&nbsp;&nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/" ><FaLinkedin/> </a>
                    </div>
                    <p> Made by Dannana Sai Ajith Kumar | Copyright &copy; by SAK789 | All rights reserved</p>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default News