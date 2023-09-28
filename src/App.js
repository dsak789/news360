import React from 'react'
import News from './components/News'
import { BrowserRouter,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<News/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App