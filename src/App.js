import React from 'react'
import News from './components/News'
import NewsAPI from './components/NewsApi';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<NewsAPI/>} />
          <Route exact path='/NewsAppOldVersion' element={<News/>} />
          <Route exact path='/*' element={<NewsAPI/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App