import React from 'react';
import './finalPage.css'
import { FaLinkedinIn, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function FinalPage() {
  return (
    <div className='finalPage'>
<div className='get-started-div'>
    <p>Get Started</p>
<button>→</button>
</div>
<div className='final-div2'>
    <div className="final-div-left">
        <p>Dash dash terraUSD neo uniswap <br/>kadena helium avalanche polymath<br/>bancor</p>
    </div>
    <div className="final-div-right">
        <p>Looking for help?</p>
        <div className='final-div-form'>
        <input type='email' placeholder='enter your Email'/>
        <button>Submit</button>
        </div>
    </div>
    </div>
<div className='finalpage-footer'>
    <div className='footer-left'>
        <p>A I . G E N</p>
    </div>
    <div className='footer-right'>
       <ul>
        <li><FaTwitter /></li>
        <li><FaLinkedinIn /></li>
        <li><FaTiktok /></li>
        <li><FaYoutube /></li>
       </ul>
    </div>
</div>
    </div>
  )
}
