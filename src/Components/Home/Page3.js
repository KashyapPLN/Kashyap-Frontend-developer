import React, { useState } from 'react';
import './page3.css';
import dp from '../../assets/pg3-dp.png';

export default function Page3() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClick = (index) => {
        setSelectedIndex(index);
    };

    return (
        <div className='page3'>
            <img src={dp} alt='dp' />
            <div className='page3-text'>
                <h3>How it works</h3>
                <ul>
                    {['Select an Avatar', 'Create or Generate Scripts', 'Select AI Voices', 'Publish'].map((text, index) => (
                        <li
                            key={index}
                            className={selectedIndex === index ? 'active' : ''}
                            onClick={() => handleClick(index)}
                        >
                            {text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
