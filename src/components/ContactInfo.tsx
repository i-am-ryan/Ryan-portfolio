interface ContactInfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  isEmail?: boolean;
}

const ContactInfo = ({ icon, label, value, href, isEmail }: ContactInfoProps) => {
  const content = (
    <div className="flex items-center space-x-3 p-3 glass-card hover:scale-105 transition-all duration-300 group cursor-pointer">
      <div className="text-primary group-hover:text-accent transition-colors duration-300">
        {icon}
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-foreground group-hover:gradient-text transition-all duration-300">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a 
        href={isEmail ? `mailto:${href}` : href} 
        target={isEmail ? '_self' : '_blank'}
        rel={isEmail ? '' : 'noopener noreferrer'}
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
};

export default ContactInfo;