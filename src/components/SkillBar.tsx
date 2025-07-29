import { useEffect, useState } from 'react';

interface SkillBarProps {
  skill: string;
  level: number;
  category?: string;
}

const SkillBar = ({ skill, level, category }: SkillBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      const animateLevel = () => {
        let start = 0;
        const increment = level / 50;
        const animate = () => {
          start += increment;
          if (start < level) {
            setCurrentLevel(start);
            requestAnimationFrame(animate);
          } else {
            setCurrentLevel(level);
          }
        };
        animate();
      };
      animateLevel();
    }, 200);

    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="group mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
          {skill}
        </span>
        <span className="text-xs text-muted-foreground">
          {Math.round(currentLevel)}%
        </span>
      </div>
      
      <div className="skill-bar group-hover:scale-105 transition-transform duration-300">
        <div 
          className="skill-fill group-hover:animate-glow"
          style={{ 
            width: isVisible ? `${currentLevel}%` : '0%',
            transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </div>
      
      {category && (
        <span className="text-xs text-muted-foreground/60 mt-1 block">
          {category}
        </span>
      )}
    </div>
  );
};

export default SkillBar;