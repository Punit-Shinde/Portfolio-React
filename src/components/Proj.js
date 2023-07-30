import React from 'react'

import './Proj.css'


const Proj = () => {
    return (
        <>
        
    <div className='cards'>
                <div className='card1'>
                    <div className='card-image1'></div>
                    <div className='category'> Portfolio</div>
                    <div className='heading'>This is a personal portfolio. Based on HTML, CSS, JS.
                        <div className='site'><a href="https://github.com/Punit-Shinde/Portfolio" target="_blank" rel="noreferrer">GitHub</a></div> 
                    </div>
                </div>

                <div className='card2'>
                    <div><a href="https://punit-shinde.github.io/TODO-App/" target="_blank" rel="noreferrer"><img className='card-image2' src={require('../assets/tdpp.png')} alt='Quiz app' /></a></div>
                    <div className='category'> To-DO App </div>
                    <div className='heading'> Tech. used - HTML, CSS, JS & Firebase.
                    <div className='site'><a href="https://github.com/Punit-Shinde/TODO-App" target="_blank" rel="noreferrer">GitHub</a></div>
                        
                    </div>
                </div>

                <div className='card3'>
                    <div><a href="https://punit-shinde.github.io/Quiz-app/" target="_blank" rel="noreferrer"><img className='card-image3' src={require('../assets/qapp.png')} alt='Quiz app' /></a></div>
                    <div className='category'> Quiz App </div>
                    <div className='heading'> Tech. used - HTML, CSS, JS and VS-Code
                    <div className='site'><a href="https://github.com/Punit-Shinde/Quiz-app" target="_blank" rel="noreferrer">GitHub</a></div>
                        
                    </div>
                </div>

                <div className='card4'>
                    <div><a href="https://punit-shinde.github.io/space-invaders/" target="_blank" rel="noreferrer"><img className='card-image4' src={require('../assets/sipp.png')} alt='Quiz app' /></a></div>
                    <div className='category'> Space Invaders </div>
                    <div className='heading'> Tech. used - HTML, CSS, JS & Canvas.
                    <div className='site'><a href="https://github.com/Punit-Shinde/space-invaders" target="_blank" rel="noreferrer">GitHub</a></div>
                        
                    </div>
                </div>

                <div className='card5'>
                    <div><a href=" " target="_blank" rel="noreferrer"><img className='card-image5' src={require('../assets/webspp.png')} alt='Quiz app' /></a></div>
                    <div className='category'> Amazon-Scraper </div>
                    <div className='heading'> Tech. using - Python. and Vs-Code
                    <div className='site'><a href="https://github.com/Punit-Shinde/Assingment/tree/main/amazon_scraper" target="_blank" rel="noreferrer"> GitHub </a></div>
                    
                    </div>
                </div>

                <div className='card6'>
                    <div><a href="https://github.com/Punit-Shinde" target="_blank" rel="noreferrer"><img className='card-image6' src={require('../assets/load.gif')} alt='Quiz app' /></a></div>
                    <div className='category'> In-Devlopment </div>
                    <div className='heading'> Tech. using - HTML, CSS, JS and Python.
                    <div className='site'> GitHub</div>
                        
                    </div>
                </div>
        </div>


        
        </>
    )
}

export default Proj