import React from 'react'
import "./Courses.css"

import Card from "./Card"

//----------------images----------------------
import pythonimg from "../../assets/python.png"
import DS from "../../assets/datastructure.png"
import javaimg from "../../assets/javaimg.jpg"
import sqlpic from "../../assets/sqlimg.jpg"
import fullstack from "../../assets/fullstack.jpg"
import jsimg from "../../assets/jsimg.jpg"
import AI from "../../assets/machineimg.jpg"
import Cimg from "../../assets/c++img.jpg"
import AIimg from "../../assets/AIimg.jpg"
//-----------------------------------------



export default function Courses() {

  let CoursesData = [
    {
      Banner: pythonimg,
      Category: "Core Programming",
      CourseTitle: "Complete Basic Python",
      CourseDescription: "lorem",
      CoursePrice: "12000",
      CourseDuration: "12Hr",
      CourseLanguage: "English",
    },
    {
      Banner: javaimg,
      Category: "Core Programming",
      CourseTitle: "Advanced Java",
      CourseDescription: "lorem",
      CoursePrice: "15000",
      CourseDuration: "20Hr",
      CourseLanguage: "English",
    },
    {
      Banner: Cimg,
      Category: "Core Programming",
      CourseTitle: "C++ for Beginners",
      CourseDescription: "lorem",
      CoursePrice: "10000",
      CourseDuration: "15Hr",
      CourseLanguage: "English",
    },
    {
      Banner: DS,
      Category: "Core Programming",
      CourseTitle: "Data Structures and Algorithms",
      CourseDescription: "lorem",
      CoursePrice: "18000",
      CourseDuration: "25Hr",
      CourseLanguage: "English",
    },
    {
      Banner: sqlpic,
      Category: "Core Programming",
      CourseTitle: "Mastering SQL",
      CourseDescription: "lorem",
      CoursePrice: "12000",
      CourseDuration: "18Hr",
      CourseLanguage: "English",
    },
    {
      Banner: fullstack,
      Category: "Full Stack",
      CourseTitle: "MERN Stack Development",
      CourseDescription: "lorem",
      CoursePrice: "25000",
      CourseDuration: "40Hr",
      CourseLanguage: "English",
    },
    
    {
      Banner: AI,
      Category: "AI",
      CourseTitle: "Machine Learning with Python",
      CourseDescription: "lorem",
      CoursePrice: "20000",
      CourseDuration: "30Hr",
      CourseLanguage: "English",
    },
                 
    {
      Banner: AIimg,
      Category: "AI",
      CourseTitle: "Artificial Intelligence Fundamentals",
      CourseDescription: "lorem",
      CoursePrice: "15000",
      CourseDuration: "20Hr",
      CourseLanguage: "English",
    },
   
    {
      Banner:jsimg,
      Category: "Core Programming",
      CourseTitle: "Mastering JavaScript",
      CourseDescription: "lorem",
      CoursePrice: "18000",
      CourseDuration: "25Hr",
      CourseLanguage: "English",
    },
  ];


  return (
    <div>
        <center>
            <h1 className='heading'>Courses</h1>
            {CoursesData.map((e,i)=>
              <Card key = {i} e = {e} />
            )}
        </center>
    </div>
  )
}