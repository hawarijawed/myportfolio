import React from 'react';

// Type definition for props
interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}

const MagicButton: React.FC<MagicButtonProps> = ({
  title, 
  icon, 
  position, 
  handleClick, 
  otherClasses
}) => {
  return (
    <button
      // onClick={handleClick}
      className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md border
         border-slate-400 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
         bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none
          focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:w-60 md:mt-10 ${otherClasses}`}
    >
      
      {title}
      {icon && <span className="ml-4">{icon}</span>}  {/* Add custom spacing */}
      
    </button>
  );
};

export default MagicButton;
