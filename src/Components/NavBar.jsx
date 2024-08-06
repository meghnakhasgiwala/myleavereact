import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom';

export default function NavBar() {
  return (
    <div id="MainNav">
        <h2>Learning Management System</h2>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/Courses"}>Courses</Link>
            </li>
            <li>
                <Link to={"/Practice"}>Practice</Link>
            </li>
        </ul>
    </div>
  )
}
