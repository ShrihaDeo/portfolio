// @flow strict
'use client'
import React from 'react';

// AnimatedStrip component for the cute animation
const AnimatedStrip = () => (
  <div className="animated-strip">
    {/* Your animation or GIF goes here */}
    {/* For example, an animated GIF */}
    <img src="https://i.gifer.com/origin/8c/8cd3f1898255c045143e1da97fbabf10_w200.gif" alt="Cute Animated Strip" />
  </div>
);

const HelloSerah = () => {
  return (
    <div className="container">
      {/* Include the AnimatedStrip component */}
      <AnimatedStrip />
      
      <h1 className="text">Hi! I'm Shriha Deo!</h1>
      <h1 className="text2">And I am a Passionate Software Engineering Student :D</h1>
      <div className="animation">
        {/* Your cute animation or GIF goes here */}
        {/* For example, an animated GIF */}
        <img src="https://www.aalpha.net/wp-content/uploads/2020/12/full-stack-development.gif" alt="Software Engineering Animation" />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 20px; /* Add space between text and animation */
        }
       
        .text {
          font-size: 6rem; /* Increased size */
          font-weight: bold;
          text-align: center;
          color: darkblue;
        }

        .text2 {
          font-size: 3rem; /* Increased size */
          font-weight: bold;
          text-align: center;
        }

        .animation img {
          border-radius: 10px; /* Add curved edges to the GIF */
        }

        /* Style for the animated strip */
        .animated-strip {
          width: 100%;
          height: 50px; /* Adjust height as needed */
          background-color: #f3caca;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .animated-strip img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default HelloSerah;
