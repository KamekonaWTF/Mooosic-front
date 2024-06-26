import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import UserForm from './components/UserForm';
import PostForm from './components/PostForm';
import LogIn from './components/LogIn'
import LandingPage from './LandingPage';
import './App.css'

function App() {

  const [postData, setPostData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    fetch('http://localhost:3000')
  .then(res => res.json())
  .then(data => {
    setPostData(data);
    setIsLoading(false);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    setIsLoading(false);
  });
    
  },[])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='dashboard' element={<Home postData = {postData} isLoading={isLoading} />} />
          <Route path='/dashboard/newPost' element={<PostForm />} />
        <Route path='sign-up' element={<UserForm />} />
        <Route path='log-in' element={<LogIn />} />
        
      </Routes>
    </Router>
    
  )
}

export default App
