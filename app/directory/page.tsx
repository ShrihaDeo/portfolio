import { personalData } from '../components/utils/personal-data';
import AboutSection from '../components/About/about';
import Skills from '../components/Skills/skills';
import Link from 'next/link';
import HelloSerah from '../components/Top/top';

export default async function Home() {
  return (
    <div
      style={{
        background: 'linear-gradient(to right, #a1c4fd, #fbc2eb)',
        minHeight: '100vh',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column', // Change to column layout
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Link href={ '../components/Game' }>
      <button>
        Play a Guessing Game!
      </button>
      </Link>
      
      <HelloSerah/>
      <AboutSection />
      <Skills/>
    </div>
  );
}

