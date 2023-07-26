import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <>
    <div className='form'>
      < div className='form-title'>
        <h1>Get in touch</h1>
      </div>
      <div className='social-buttons'>
        <ul>
          <li><a href="https://github.com/Punit-Shinde" target="_blank" rel="noreferrer"><img className='button' src={require('../assets/git.png')} alt='git' /></a></li>
          <li><a href="https://linkedin.com/in/punit-shinde" target="_blank" rel="noreferrer"><img className='button' src={require('../assets/link.png')} alt='linkd' /></a></li>
          <li><a href="mailto:punitshinde1@gmail.com" target="_blank" rel="noreferrer"><img className='button' src={require('../assets/mail.png')} alt='gmail' /></a></li>
        </ul>
      </div>
      <div className='form-content'>
        <div className='form-input'>

        <input type='text' name='text' className='input1' placeholder='Name!'/>
        <input type='text' name='text' className='input2' placeholder='Email!'/>
        <textarea name='text' id='input3' cols='30' rows='10' placeholder='Enter your message here!'></textarea>
        <button className='form-btn' type='submit'>Submit</button>


        </div>
        </div>
      </div>






    </>
  )
}

export default Form