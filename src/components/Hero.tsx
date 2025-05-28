import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  videoBtnText?: string;
  videoBtnLink?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  videoBtnText,
  videoBtnLink,
  backgroundImage,
}) => {
  const bgStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <div className="relative bg-gradient-to-r from-primary to-secondary text-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 rounded-bl-[200px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-16"></div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/5 rounded-full"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">{subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <Link to={ctaLink} className="btn bg-white text-primary hover:bg-gray-100">
              {ctaText}
            </Link>
            {videoBtnText && videoBtnLink && (
              <a
                href={videoBtnLink}
                className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 inline-flex items-center"
              >
                <Play size={20} className="mr-2" />
                {videoBtnText}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;