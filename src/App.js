import React from 'react'
import News from './components/News'
import { Route,Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<News/>}/>
      </Routes>
      
    </div>
  )
}

export default App