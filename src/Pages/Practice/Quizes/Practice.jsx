import React from 'react'
import "./Practice.css"
import { Link } from 'react-router-dom'
export default function Practice() {
  return (
    <div>
        <div id="PracticeNavBar">
          <h2>Practice</h2>
          {/* browser router cannot be used again in child so we give the link tag here */}

          <ul>
            <li><Link to={"/Practice/Questions"}>Questions</Link></li>
            <li><Link to = {"/Practice/Quiz"}>Quiz</Link></li>
          </ul>
        </div>




    </div>
  )
}