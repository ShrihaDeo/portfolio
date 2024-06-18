import { personalData } from '../components/utils/personal-data';
import AboutSection from '../components/About/about';

export default async function Home() {
  return (
    <div
      style={{
        background: 'linear-gradient(to right, #a1c4fd, #fbc2eb)',
        minHeight: '100vh',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <AboutSection />
    </div>
  );
}
