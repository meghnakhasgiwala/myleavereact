import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// !-------------Components----------------
import NavBar from './Components/NavBar'
import Footer from './Components/Footer.jsx'
// !---------------------------------------

// !-------------Pages----------------
import Home from "./Pages/Home/Home.jsx"
import Courses from "./Pages/Courses/Courses.jsx"
import Practice from "./Pages/Practice/Quizes/Practice.jsx"
import Quiz from "./Pages/Practice/Quizes/Quiz.jsx"
import Questions from "./Pages/Practice/Questions/Questions.jsx"
import HtmlCss from './Pages/Practice/Quizes/Htmlcss.jsx'
import Javasrcipt from './Pages/Practice/Quizes/Javasrcipt.jsx' 
import ReactPage from './Pages/Practice/Quizes/ReactPage.jsx'
import Editor from './Pages/Editor/Editor.jsx'
// !--------------------------------------------

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* The NavBar component will be shown on all pages */}
        
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Practice" element={<Practice />} />
          <Route path="/Practice/Quiz" element={<Quiz />} />
          <Route path="/Practice/Questions" element={<Questions />} />
          <Route path="/Practice/Quizes/Htmlcss" element={<HtmlCss />} />
          <Route path='/Practice/Quizes/Javasrcipt' element={<Javasrcipt />} />
          <Route path="/Practice/Quizes/ReactPage" element={<ReactPage />} />
          <Route path='/Editor' element={<Editor />} />
        </Routes>
        
        <Footer />
        {/* The Footer component will be shown on all pages */}
      </BrowserRouter>
    </>
  )
}
