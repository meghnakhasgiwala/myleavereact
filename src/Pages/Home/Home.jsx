import React, { useState } from 'react';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import imgcomp from '../../assets/computer1.gif';
import './Home.css';
import {Link} from 'react-router-dom'

const labels  = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

export default function Home() {
  const [value, setValue] = useState(2.5);

  return (
    <div className="container">
      <div className="courses-img">
        <img src={imgcomp} alt="Logo" className="comp-img" />
        <center>
          <div className="main">
            <h1>Empowering Learning, Inspiring Success</h1>
            <p>Master different programming languages</p>
            {/* <a href="/Courses" id="btncourses">Browse Courses</a> */}
            <Link to ="/Courses" id="btncourses">Browse Courses</Link>
            <div className="rating">
              <Rating
                name="text-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => setValue(newValue)}
                emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
              />
              <Box className="Box" sx={{ ml: 2}}>{labels[value]}</Box>
            </div>
          </div>
        </center>
      </div>
      
    </div>
  );
}
