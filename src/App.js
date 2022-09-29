import React from 'react'
import HomePage from './components/home-page/HomePage'
import { Routes, Route } from "react-router-dom";
import GitUserInfo from './components/git-user-info/GitUserInfo';
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<HomePage/>}/>
        <Route path='/git-user-info' element={<GitUserInfo/>}/>
      </Routes>
    </div>
  )
}

export default App