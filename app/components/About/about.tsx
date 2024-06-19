
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
        padding: '150px',
        borderRadius: '10px',
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <p
            style={{
              fontWeight: 'bold',
              marginBottom: '20px',
              color: '#00008b', // Dark Blue
              fontSize: '50px',
              textTransform: 'uppercase',
              fontFamily: 'Courier New, Courier, monospace',
            }}
          >
            Who I am?
          </p>
          <p
            style={{
              color: '#00008b', // Dark Blue
              fontSize: '25px',
              fontFamily: 'Courier New, Courier, monospace',
            }}
          >
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={pic}
            width={380}
            height={380}
            alt="Shriha Deo"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;


