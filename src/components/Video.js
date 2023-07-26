import React from 'react'
import { Link } from 'react-router-dom'
import './Video.css'
import bgvdo from '../assets/bgvdo.mp4'


const Video = () => {
    return (
    <div className='name'>
         
        <video autoPlay loop muted id='video'>
              <source src={bgvdo} type='video/mp4' />
        </video>

        <div className='content'>
              <h1>Hi, I'm Punit Shinde</h1>
              <p>Web developer</p>
             

            
              <Link to='/About' className='btn'>More about me</Link>
            </div>

         </div>
          
    )
  }
  
  export default Video