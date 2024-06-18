'use client'
import { personalData } from '../utils/personal-data';
import pic from '../utils/profile.png';
import Image from "next/image";

function AboutSection() {
  return (
    <div
      id="about"
      className="my-12 lg:my-16 relative"
      style={{
        background: 'linear-gradient(to right, #a1c4fd, #fbc2eb)',
        padding: '20px',
        borderRadius: '10px'
      }}
    >
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span
          style={{
            backgroundColor: '#1a1443',
            color: 'white',
            transform: 'rotate(90deg)',
            padding: '10px 20px',
            fontSize: '20px',
            borderRadius: '10px',
            fontFamily: 'Courier New, Courier, monospace'
          }}
        >
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p
            style={{
              fontWeight: 'bold',
              marginBottom: '20px',
              color: '#00008b', // Dark Blue
              fontSize: '20px',
              textTransform: 'uppercase',
              fontFamily: 'Courier New, Courier, monospace'
            }}
          >
            Who I am?
          </p>
          <p
            style={{
              color: '#00008b', // Dark Blue
              fontSize: '16px',
              fontFamily: 'Courier New, Courier, monospace'
            }}
          >
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src= { pic }
            width={280}
            height={280}
            alt="Shriha Deo"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

