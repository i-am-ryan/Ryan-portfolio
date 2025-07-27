import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({ title, description, technologies, liveUrl, githubUrl, featured }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`glass-card p-6 group cursor-pointer transition-all duration-500 hover:scale-[1.03] ${
        featured ? 'glow-primary' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {featured && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-xs font-medium">
          Featured
        </div>
      )}
      
      <div className="relative overflow-hidden">
        <h3 className={`text-xl font-bold mb-3 transition-all duration-300 ${
          isHovered ? 'gradient-text' : 'text-foreground'
        }`}>
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-full backdrop-blur-sm border border-border/30 transition-all duration-300 hover:bg-primary/20 hover:text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-primary to-primary-glow text-white py-2 px-4 rounded-lg text-center text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-secondary/50 text-secondary-foreground py-2 px-4 rounded-lg text-center text-sm font-medium transition-all duration-300 hover:bg-secondary hover:scale-105 backdrop-blur-sm"
            >
              Code
            </a>
          )}
        </div>
      </div>
      
      <div 
        className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(45deg, hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.1))',
        }}
      />
    </div>
  );
};

export default ProjectCard;