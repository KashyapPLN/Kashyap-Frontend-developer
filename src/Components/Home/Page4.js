import React, { useEffect, useRef, useState } from 'react';
import './page4.css';

export default function Page4() {
  const [scrollDir, setScrollDir] = useState(null);
  const prevScrollY = useRef(0);
  const pageRef = useRef(null);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > prevScrollY.current) {
      setScrollDir('down');
    } else {
      setScrollDir('up');
    }
    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='page4' ref={pageRef}>
      <ul className={`list1 ${scrollDir === 'down' ? 'animate-list1' : ''} ${scrollDir === 'up' ? 'reset-list1' : ''}`}>
        <li>Avatar</li>
        <li>Technology</li>
        <li>Design</li>
        <li>Artificial Intelligence</li>
        <li>AI Chat Bot</li>
        <li>Customizable</li>
        <li>3d Model</li>
      </ul>
      <ul className={`list2 ${scrollDir === 'down' ? 'animate-list2' : ''} ${scrollDir === 'up' ? 'reset-list2' : ''}`}>
        <li>People</li>
        <li>Create Videos</li>
        <li>Analyze</li>
        <li>Outfits</li>
        <li>3d Model</li>
        <li>Voice Chat</li>
        <li>Marketing</li>
        <li>Realistic</li>
      </ul>
    </div>
  );
}
