import React from 'react';
import './page5.css';
import red_shoe from '../../assets/Red Shoe.png';
import dp from '../../assets/pg3-dp.png'
import keyboard from '../../assets/keyboard.png'
import generator from '../../assets/generator.png'
export default function Page5() {
  return (
    <div className='page5'>
        <div className='pg5-div1'>
            <div className='shoe-container'>
<p>AI<br/> Outfits</p>
<div className='shoe-color-div'></div>
<img src={red_shoe} alt='red shoe'/>
            </div>
            <div className='dp-img-div'>
<p>Realistic AI<br/> Avatar</p>
<img src={dp} alt='ai avatar'/>
            </div>
        </div>

        <div className='pg5-div2'>
            <div className='keyboard-img-div'>
            <p>Generate or Write your <br/> Script</p>
            <img src={keyboard} alt='keyboard'/>
            </div>
            <div className='generator-container'>
<p>AI-Powered Voice<br/> Generator</p>
<img src={generator} alt='generator'/>
            </div>
        </div>
    </div>
  )
}
