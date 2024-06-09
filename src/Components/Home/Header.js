import React, { useEffect } from 'react';
import './header.css';
import pic1 from '../../assets/Picture1.png';
import pic2 from '../../assets/Picture2.png';
import pic3 from '../../assets/Picture3.png';
import pic4 from '../../assets/Picture4.png';
import pic5 from '../../assets/Picture5.png';
import pic6 from '../../assets/Picture6.png';
import pic7 from '../../assets/Picture7.png';
import pic8 from '../../assets/Picture8.png';
import pic9 from '../../assets/Picture9.png';

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const column1 = document.querySelector('.column1');
      const column2 = document.querySelector('.column2');
      const column3 = document.querySelector('.column3');

      column1.style.marginTop = '50px';
      column2.style.marginTop = '90px';
      column3.style.marginTop = '50px';

      setTimeout(() => {
        column1.style.marginTop = '80px';
        column2.style.marginTop = '40px';
        column3.style.marginTop = '80px';
      }, 300)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='header'>
      <div className='header-left'>
        <button className='header-top-button'>
          <span role='img' aria-label='party'>🎉</span>
          <span>New in AI.GEN: Real Time Interaction</span>
        </button>
        <h3>IOTA polygon serum ipsum WAX terraUSD gala THETA</h3>
        <p>Chiliz serum TRON dash aave cardana crypto celo. Golem ankr bancor horizen ethereum quant bitcoin.</p>
        <button className='header-bottom-button'> Get Started</button>
      </div>
      <div className='header-right'>
        <div className='column1'>
          <img src={pic1} alt='pic1' />
          <img src={pic2} alt='pic2' />
          <img src={pic3} alt='pic3' />
        </div>
        <div className='column2'>
          <img src={pic4} alt='pic4' />
          <img src={pic6} alt='pic6' />
          <img src={pic5} alt='pic5' />
        </div>
        <div className='column3'>
          <img src={pic7} alt='pic7' />
          <img src={pic8} alt='pic8' />
          <img src={pic9} alt='pic9' />
        </div>
      </div>
    </div>
  );
}
