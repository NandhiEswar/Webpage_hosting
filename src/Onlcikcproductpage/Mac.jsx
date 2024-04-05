import React from 'react';
import platy from '../Assert/platy.mp4';

const MacBook = () => {
  return (
    <main className="relative">
      <div className="relative">
        <div className="relative items-center justify-center flex">
          <img
            src="https://incoding.co.kr/portfolio/img/macbook-cover-b.svg"
            alt=""
            className="w-[55vw] items-center justify-center flex h-auto"
          />
          <video className="absolute mt-3  " controls style={{ objectFit: 'cover', width: '49vw' }}>
            <source src={platy} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <img src="https://incoding.co.kr/portfolio/img/macbook-bottom.png" alt="" className="w-full h-auto" />
      </div>
    </main>
  );
};

export default MacBook;
