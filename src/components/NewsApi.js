const axios = require('axios')
const express = require('express')
const cors = require('cors');
const app =express()
app.use(cors());
 app.use(express.json())

// const [ndata,setNdata] = useState([])


app.get('/all',async (req,res)=>{
    try{
        const response= await axios.get('https://inshortsapi.vercel.app/news?category=all');
        const news=response.data;
        // console.log(news)
        res.status(200).json(news.data) 
    
    }
    catch(error){
        console.log("Error in Fteching Neews API", error)
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

app.listen(1437,(req,res)=>{
    console.log("Port running at no:1437")
})