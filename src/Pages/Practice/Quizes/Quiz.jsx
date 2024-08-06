import React from 'react'
// import Practice  from  '../Quizes/Practice'
import { Link } from 'react-router-dom';
import './Quiz.css';
//------------------------components----------------

import JS from "../../../assets/JS.jpg";
import imgquiz from "../../../assets/html.jpg"

import rea from "../../../assets/reactimg.jpg"
//---------------------------------------------------




export default function Quiz() {
  return (
    // <div>
    //   {/* called practice in quiz and questions so navigation bar remains common in both the pages */}
    //   <Practice />
    //     <center>
    //         <h1>
    //         Quiz page
    //         </h1>
    //     </center>
    // </div>

      <div>
      <center>
        <h1>Quiz Page</h1>
    </center>
      <div className="quiz-card-container">

      
      <Link to={"/Practice/Quizes/HtmlCss"}>
          <div className="quiz-card">
            <img className="quiz-card-image" src={imgquiz} alt="HTML-CSS" />
            <h3 className="quiz-card-title">HTML-CSS</h3>
          </div>
      </Link>

      <Link to={"/Practice/Quizes/Javasrcipt"}>
          <div className="quiz-card">
            <img className="quiz-card-image" src={JS} alt="JavaScript" />
            <h3 className="quiz-card-title">JavaScript</h3>
          </div>
      </Link>


      <Link to={"/Practice/Quizes/React"}>
          <div className="quiz-card">
            <img className="quiz-card-image" src={rea} alt="React" />
            <h3 className="quiz-card-title">React</h3>
          </div>
      </Link>



    </div>
  </div>
);
};


  

