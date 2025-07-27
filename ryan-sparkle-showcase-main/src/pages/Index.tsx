import { useState, useEffect } from 'react';
import { 
  Mail, 
  MapPin, 
  Globe, 
  Github, 
  Linkedin, 
  Download,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Settings,
  BookOpen,
  Award,
  User,
  Target,
  Heart
} from 'lucide-react';
import Section from '@/components/Section';
import SkillBar from '@/components/SkillBar';
import ProjectCard from '@/components/ProjectCard';
import ContactInfo from '@/components/ContactInfo';
import CursorGlow from '@/components/CursorGlow';
import Navbar from '@/components/Navbar';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const programmingSkills = [
    'Python',
    'Java', 
    'JavaScript',
    'C#',
  ];

  const webDevSkills = [
    'React.js',
    'Flask',
    'HTML5',
    'CSS3',
    'REST APIs',
  ];

  const cloudSkills = [
    'AWS (EC2, S3, VPC, IAM)',
    'Google Cloud',
    'Git, GitHub',
    'CI/CD',
    'Docker (Basics)',
    'Linux',
  ];

  const projects = [
    {
      title: 'GRAMSAK Electrical & Mechanical Projects Website',
      description: 'Interactive company portfolio website showcasing diverse infrastructure projects across South Africa. Features animated project displays, responsive design, and clean modern interface.',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
      liveUrl: 'https://gram-sak.vercel.app'
    },
    {
      title: 'NourishSA – Food Security Platform',
      description: 'An interactive web app tackling food insecurity in South Africa. Built with modern frontend technologies and ready for backend integration.',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://nourish-two.vercel.app/'
    },
    {
      title: 'Photography Business Website',
      description: 'Professional photography website for booking shoots with integrated booking form and service showcase.',
      technologies: ['React', 'Tailwind CSS'],
      liveUrl: 'https://photography-business.vercel.app/'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Personal portfolio showcasing projects, technical skills, and certifications with modern design.',
      technologies: ['React.js', 'Tailwind CSS'],
      liveUrl: 'https://personal-portfolio-gray-alpha-31.vercel.app/'
    },
    {
      title: 'Personal Finance Tracker',
      description: 'JavaScript-based budgeting tool for tracking and visualizing expenses and incomes.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/i-am-ryan/Personal-finance-tracker-.git'
    },
    {
      title: 'Python Mini Projects',
      description: 'Collection of small-scale Python projects including basic games and automation scripts.',
      technologies: ['Python'],
      githubUrl: 'https://github.com/i-am-ryan/Python-projects.git'
    }
  ];

  const certifications = [
    'Google IT Automation with Python – Coursera',
    'AWS Cloud Practitioner Essentials – AWS',
    'Architecting Solutions on AWS – AWS',
    'Python for Data Science and AI – IBM',
    'Automating Real-World Tasks with Python – Google',
    'Developing AI Applications with Python and Flask – IBM',
    'AWS Technical Essentials',
    'Google Digital Marketing & E-commerce',
    'Google Project Management'
  ];

  return (
    <div className="min-h-screen relative">
      <CursorGlow />
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        
        <div className={`text-center z-10 max-w-4xl mx-auto ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="mb-8 flex flex-col items-center">
            <div className="mb-8 relative">
              <img 
                src="/lovable-uploads/6ab1ab32-d77c-4f0d-8520-73700095411c.png"
                alt="Ryan Musiyarira"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover glass-card p-2 hover:scale-110 transition-all duration-500 glow-primary"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="gradient-text">RYAN</span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text-accent">MUSIYARIRA</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Final-year BCom Information Systems Student<br />
              <span className="text-primary font-medium">Software Developer • Cloud Enthusiast • Problem Solver</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <ContactInfo 
              icon={<MapPin size={20} />}
              label="Location"
              value="Johannesburg, SA"
            />
            <ContactInfo 
              icon={<Mail size={20} />}
              label="Email"
              value="Musiyariraryan96@gmail.com"
              href="Musiyariraryan96@gmail.com"
              isEmail
            />
            <ContactInfo 
              icon={<Github size={20} />}
              label="GitHub"
              value="i-am-ryan"
              href="https://github.com/i-am-ryan/i-am-ryan.git"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://linkedin.com/in/ryan-musiyarira-866ab22b5"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-6 py-3 hover:scale-105 transition-all duration-300 flex items-center space-x-2 group"
            >
              <Linkedin size={20} className="group-hover:text-primary transition-colors" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <button className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 glow-primary">
              <Download size={20} />
              <span className="font-medium">Download CV</span>
            </button>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <Section 
        id="about"
        title="Professional Summary"
        subtitle="Passionate about technology and its role in solving real-world problems"
      >
        <div className="glass-card p-8 max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Final-year BCom Information Systems student at the University of Johannesburg with a developing foundation in 
            <span className="text-primary font-medium"> software development</span>, 
            <span className="text-accent font-medium"> data management</span>, and 
            <span className="text-primary font-medium"> cloud technologies</span>. 
            Actively gaining hands-on experience through academic projects, online certifications, and self-driven learning. 
            Equipped with a solid understanding of how technology supports business operations, and eager to apply 
            problem-solving and analytical thinking in real-world environments.
          </p>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <div className="glass-card p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Bachelor of Commerce in Information Systems
            </h3>
            <p className="text-lg text-muted-foreground">
              University of Johannesburg – Johannesburg, Gauteng, South Africa
            </p>
            <p className="text-primary font-medium mt-2">Expected: 2025</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 group hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center mb-4">
                <Code className="text-primary mr-3 group-hover:text-accent transition-colors duration-300" size={24} />
                <h4 className="text-lg font-semibold group-hover:gradient-text transition-all duration-300">Software Development</h4>
              </div>
              <ul className="text-muted-foreground space-y-2 group-hover:text-foreground transition-colors duration-300">
                <li>• Programming skills (Python, Java, JavaScript)</li>
                <li>• Problem-solving & logical thinking</li>
                <li>• Building scalable business applications</li>
              </ul>
            </div>

            <div className="glass-card p-6 group hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center mb-4">
                <Database className="text-accent mr-3 group-hover:text-primary transition-colors duration-300" size={24} />
                <h4 className="text-lg font-semibold group-hover:gradient-text transition-all duration-300">Information Systems</h4>
              </div>
              <ul className="text-muted-foreground space-y-2 group-hover:text-foreground transition-colors duration-300">
                <li>• Database management using SQL</li>
                <li>• IT project management</li>
                <li>• ERP and CRM systems automation</li>
              </ul>
            </div>

            <div className="glass-card p-6 group hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center mb-4">
                <Target className="text-primary mr-3 group-hover:text-accent transition-colors duration-300" size={24} />
                <h4 className="text-lg font-semibold group-hover:gradient-text transition-all duration-300">Business Management</h4>
              </div>
              <ul className="text-muted-foreground space-y-2 group-hover:text-foreground transition-colors duration-300">
                <li>• Understanding company operations</li>
                <li>• Strategic planning & leadership</li>
                <li>• Operational decision-making</li>
              </ul>
            </div>

            <div className="glass-card p-6 group hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center mb-4">
                <Settings className="text-accent mr-3 group-hover:text-primary transition-colors duration-300" size={24} />
                <h4 className="text-lg font-semibold group-hover:gradient-text transition-all duration-300">Entrepreneurship</h4>
              </div>
              <ul className="text-muted-foreground space-y-2 group-hover:text-foreground transition-colors duration-300">
                <li>• Starting & managing businesses</li>
                <li>• Innovation techniques</li>
                <li>• Digital business models</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Technical Skills */}
      <Section 
        id="skills"
        title="Technical Skills"
        subtitle="Constantly expanding my technical toolkit through hands-on projects and learning"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="glass-card p-6">
            <div className="flex items-center mb-6">
              <Code className="text-primary mr-3" size={24} />
              <h3 className="text-xl font-semibold">Programming Languages</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {programmingSkills.map((skill, index) => (
                <div key={index} className="skill-tag group">
                  <span className="group-hover:text-primary transition-colors duration-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center mb-6">
              <Globe className="text-accent mr-3" size={24} />
              <h3 className="text-xl font-semibold">Web Development</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {webDevSkills.map((skill, index) => (
                <div key={index} className="skill-tag group">
                  <span className="group-hover:text-accent transition-colors duration-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center mb-6">
              <Cloud className="text-primary mr-3" size={24} />
              <h3 className="text-xl font-semibold">Cloud & DevOps</h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {cloudSkills.map((skill, index) => (
                <div key={index} className="skill-tag group">
                  <span className="group-hover:text-primary transition-colors duration-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section 
        id="projects"
        title="Featured Projects"
        subtitle="A showcase of my development journey and problem-solving capabilities"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Section>

      {/* Training Certifications */}
      <Section 
        id="certifications"
        title="Training Certifications"
        subtitle="Continuous learning through industry-recognized programs"
      >
        <div className="glass-card p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center p-4 glass-card group hover:scale-[1.02] hover:shadow-lg hover:bg-primary/5 transition-all duration-300 cursor-pointer">
                <Award className="text-primary mr-3 group-hover:text-accent group-hover:scale-110 transition-all duration-300" size={20} />
                <span className="text-sm group-hover:text-foreground group-hover:font-medium transition-all duration-300">{cert}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 space-y-2">
            <a 
              href="https://github.com/i-am-ryan/Coursera-Certificates"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors animated-underline"
            >
              <ExternalLink size={16} />
              <span>View Coursera Certificates</span>
            </a>
            <br />
            <a 
              href="https://github.com/i-am-ryan/Additional-Certificates"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors animated-underline"
            >
              <ExternalLink size={16} />
              <span>View Additional Certificates</span>
            </a>
          </div>
        </div>
      </Section>

      {/* Soft Skills & Interests */}
      <Section id="interests" title="Beyond Technical Skills">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card p-6">
            <div className="flex items-center mb-6">
              <User className="text-primary mr-3" size={24} />
              <h3 className="text-xl font-semibold">Soft Skills</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Critical Thinking & Troubleshooting',
                'Collaboration & Teamwork', 
                'Fast Learning & Adaptability',
                'Attention to Detail',
                'Communication & Time Management'
              ].map((skill, index) => (
                <div key={index} className="flex items-center p-3 bg-secondary/30 rounded-lg hover:bg-primary/20 hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer group">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:bg-accent group-hover:scale-150 transition-all duration-300" />
                  <span className="text-sm group-hover:text-primary group-hover:font-medium transition-all duration-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center mb-6">
              <Heart className="text-accent mr-3" size={24} />
              <h3 className="text-xl font-semibold">Interests</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Creative Coding and UI/UX Design',
                'Team Sports (Soccer)',
                'Digital Content Creation & Photography',
                'Gaming & Game Design',
                'Fitness & Mindfulness',
                'AI, Cloud Technologies, and Tech Startups'
              ].map((interest, index) => (
                <div key={index} className="flex items-center p-3 bg-secondary/30 rounded-lg hover:bg-accent/20 hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer group">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
                  <span className="text-sm group-hover:text-accent group-hover:font-medium transition-all duration-300">{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer id="contact" className="py-12 text-center">
        <div className="glass-card p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold gradient-text mb-4">Let's Connect</h3>
          <p className="text-muted-foreground mb-6">
            Ready to bring fresh perspective and enthusiasm to your team
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=musiyariraryan96@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 glow-primary"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;