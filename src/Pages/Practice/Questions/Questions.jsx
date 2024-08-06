import React from 'react'
import Practice from '../Quizes/Practice'
import "./Questions.css"
import { useNavigate } from 'react-router-dom';


export default function Questions() {
 
    let navigate=useNavigate()

  let AllQuestions = [
    {
        "Question": "Write a Node.js program using if-else statements to check if a number is positive, negative, or zero.",
        "Level": "Easy",
        "Marks": 1
    },
    {
        "Question": "Create a program to determine if a given number is even or odd using if-else.",
        "Level": "Easy",
        "Marks": 1
    },
    {
        "Question": "Write a Node.js program that takes a user's age and determines if they are eligible to vote (age >= 18).",
        "Level": "Easy",
        "Marks": 1
    },
    {
        "Question": "Implement a program to find the maximum of three numbers using nested if statements.",
        "Level": "Medium",
        "Marks": 2
    },
    {
        "Question": "Create a program that checks if a year is a leap year (divisible by 4 but not by 100 or divisible by 400) using logical operators.",
        "Level": "Medium",
        "Marks": 2
    },
    {
        "Question": "Write a Node.js program to determine if a given character is a vowel or a consonant using if-else.",
        "Level": "Easy",
        "Marks": 1
    },
    {
        "Question": "Create a program that calculates the grade of a student based on their score (A, B, C, D, or F).",
        "Level": "Easy",
        "Marks": 1
    },
    {
        "Question": "Write a Node.js program to determine if a number is within a given range (between 1 and 100).",
        "Level": "Easy",
        "Marks": 1
    },
    {
        "Question": "Implement a program that checks if a string is a palindrome (reads the same forwards and backwards).",
        "Level": "Medium",
        "Marks": 2
    },
    {
        "Question": "Write a Node.js program that determines if a given year is a century year (ends with '00').",
        "Level": "Easy",
        "Marks": 1
    },
    {
        "Question": "Implement a program to check whether a number is even and a multiple of 3.",
        "Level": "Easy",
        "Marks": 1
    },
    {
        "Question": "Create a program that compares two numbers and prints the larger number using an if-else statement.",
        "Level": "Easy",
        "Marks": 1
    },
    {
        "Question": "Write a Node.js program that checks if a person is eligible for a mall discount (age <= 80 or age >= 65 and a member).",
        "Level": "Medium",
        "Marks": 2
    },
    {
        "Question": "Implement a program that determines if a triangle is equilateral, isosceles, or scalene based on the side lengths.",
        "Level": "Medium",
        "Marks": 2
    },
    {
        "Question": "Create a program to check if a given string contains both uppercase and lowercase letters.",
        "Level": "Easy",
        "Marks": 1
    },
    {
        "Question": "Write a Node.js program to determine if a person is a teenager (age between 13 and 19) and not a child or an adult.",
        "Level": "Easy",
        "Marks": 1
    },
    {
        "Question": "Implement a program that determines if a year is a leap year and also checks if it is a multiple of 5.",
        "Level": "Medium",
        "Marks": 2
    },
    {
        "Question": "Create a program that checks if a given number is positive, even, and a multiple of 7.",
        "Level": "Medium",
        "Marks": 2
    },
    {
        "Question": "Write a Node.js program using logical operators to determine if a given character is an alphabet, a digit, or a special character.",
        "Level": "Medium",
        "Marks": 2
    },
    {
        "Question": "Write a Node.js program that takes three numbers as input and determines if they can form a valid triangle based on the triangle inequality theorem.",
        "Level": "Medium",
        "Marks": 2
    },
    {
        "Question": "Create a program to check if a given year is a leap year and also determine the next leap year.",
        "Level": "Medium",
        "Marks": 2
    },
    {
        "Question": "Write a Node.js program to determine if a given number is a prime number.",
        "Level": "Medium",
        "Marks": 2
    },
    {
        "Question": "Implement a program to check if a given string is a palindrome without considering spaces, punctuation, or letter casing.",
        "Level": "Medium",
        "Marks": 2
    },
    {
        "Question": "Create a program that calculates the roots of a quadratic equation based on the values of a, b, and c, handling cases where the equation has real or complex roots.",
        "Level": "Hard",
        "Marks": 3
    }
];

 
function openEdit (e){
    e.preventDefault()
    navigate("/Editor");
  }


  return (
    <div>
      <Practice/>
        <center>
          <div id="QuestionContainer">
            {AllQuestions.map((q, i) => (
              <div key={i} className="QuestionCard">
                 <h3>{i+1}</h3>
                <h2>{q.Question}</h2>
                <div>
                  <h4>{q.Level}</h4>
                  <h4>{q.Marks} Marks</h4>
                </div>

               
                <button onClick={(e)=>openEdit(e)}>Solve</button>
              </div>
            ))}
          </div>
            <h1>
                Questions
            </h1>
        </center>
    </div>
  )
}
