
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/logo.png" 
        alt="Acadèmia Impuls Logo" 
        className="h-10 w-10 object-contain" 
      />
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">
        Acadèmia Impuls
      </h2>
    </Link>
  );
};

export default Logo;
