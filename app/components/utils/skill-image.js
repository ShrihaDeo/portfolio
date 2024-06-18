import c from './svg/skills/c.svg';
import canva from './svg/skills/canva.svg';
import csharp from './svg/skills/csharp.svg';
import css from './svg/skills/css.svg';
import figma from './svg/skills/figma.svg';
import git from './svg/skills/git.svg';
import html from './svg/skills/html.svg';
import java from './svg/skills/java.svg';
import javascript from './svg/skills/javascript.svg';
import materialui from './svg/skills/materialui.svg';
import microsoftoffice from './svg/skills/microsoftoffice.svg';
import mysql from './svg/skills/mysql.svg';
import nextJS from './svg/skills/nextJS.svg';
import photoshop from './svg/skills/photoshop.svg';
import picsart from './svg/skills/picsart.svg';
import python from './svg/skills/python.svg';
import react from './svg/skills/react.svg';
import tailwind from './svg/skills/tailwind.svg';
import typescript from './svg/skills/typescript.svg';
import wordpress from './svg/skills/wordpress.svg';

export const skillsImage = async (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
      case 'html':
        return (await import('./svg/skills/html.svg')).default;
      case 'photoshop':
        return (await import('./svg/skills/photoshop.svg')).default;
      case 'css':
        return (await import('./svg/skills/css.svg')).default;
      case 'javascript':
        return (await import('./svg/skills/javascript.svg')).default;
      case 'next js':
        return (await import('./svg/skills/nextJS.svg')).default;
      case 'react':
        return (await import('./svg/skills/react.svg')).default;
      case 'typescript':
        return (await import('./svg/skills/typescript.svg')).default;
      case 'mysql':
        return (await import('./svg/skills/mysql.svg')).default;
      case 'tailwind':
        return (await import('./svg/skills/tailwind.svg')).default;
      case 'c':
        return (await import('./svg/skills/c.svg')).default;
      case 'c#':
        return (await import('./svg/skills/csharp.svg')).default;
      case 'java':
        return (await import('./svg/skills/java.svg')).default;
      case 'python':
        return (await import('./svg/skills/python.svg')).default;
      case 'git':
        return (await import('./svg/skills/git.svg')).default;
      case 'materialui':
        return (await import('./svg/skills/materialui.svg')).default;
      case 'wordpress':
        return (await import('./svg/skills/wordpress.svg')).default;
      case 'figma':
        return (await import('./svg/skills/figma.svg')).default;
      case 'microsoft office':
        return (await import('./svg/skills/microsoftoffice.svg')).default;
      case 'picsart':
        return (await import('./svg/skills/picsart.svg')).default;
      case 'canva':
        return (await import('./svg/skills/canva.svg')).default;
      default:
        return null;
    }
  }
  

