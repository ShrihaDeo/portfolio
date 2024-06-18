import { useEffect, useState } from 'react';
import { skillsImage } from '../utils/skill-image';

const SkillIcon = ({ skill }) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    const fetchIcon = async () => {
      const iconSrc = await skillsImage(skill);
      setIcon(iconSrc);
    };
    fetchIcon();
  }, [skill]);

  if (!icon) return null;

  return <img src={icon} alt={`${skill} icon`} width={40} height={40} className="h-full w-auto rounded-lg" />;
};

export default SkillIcon;
