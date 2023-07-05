import React, { useEffect } from 'react';
import 'tailwindcss/tailwind.css';

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.pageYOffset;
      const bgImage1 = document.getElementById('parallax-background-1');
      const bgImage2 = document.getElementById('parallax-background-2');
      const bgImage3 = document.getElementById('parallax-background-3');
      bgImage1.style.backgroundPositionY = `${yOffset * -1}px`;
      bgImage2.style.backgroundPositionY = `${yOffset * -1}px`;
      bgImage3.style.backgroundPositionY = `${yOffset * -1}px`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      
      <div className="w-screen bg-white">
        <div className="mt-10 relative">
       
          <div
            id="parallax-background-1"
            className="w-[800px] h-[300px] bg-no-repeat bg-center bg-cover mx-auto"
            style={{ backgroundImage: 'url(/hills.jpg)' }}
          >
            
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              {/* <p className="font-bold text-white text-4xl">Hello, welcome sir!</p> */}
            </div>
          </div>
        </div>
        <div className="mt-4 relative">
          <div
            id="parallax-background-2"
            className="w-[800px] h-[300px] bg-no-repeat bg-center bg-cover mx-auto"
            style={{ backgroundImage: 'url(/hills.jpg)' }}
          >
            
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <p className="font-bold text-white text-4xl">Hello, welcome sir!</p>
            </div>
          </div>
        </div>
        <div className="mt-4 relative">
          <div
            id="parallax-background-3"
            className="w-[800px] h-[300px] bg-no-repeat bg-center bg-cover mx-auto"
            style={{ backgroundImage: 'url(/hills.jpg)' }}
          >
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <p className="font-bold text-white text-4xl">Hello, welcome sir!</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
