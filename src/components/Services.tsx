import React from 'react';
import { FlaskConical, Droplets, FlaskRound as Flask, Sparkles } from 'lucide-react';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import { SERVICES } from '../constants';
import { useInView } from '../hooks/useInView';

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
  index: number;
}> = ({ title, description, icon, imageUrl, index }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  const renderIcon = () => {
    switch (icon) {
      case 'FlaskConical':
        return <FlaskConical className="h-6 w-6" />;
      case 'Droplets':
        return <Droplets className="h-6 w-6" />;
      case 'Flask':
        return <Flask className="h-6 w-6" />;
      case 'Sparkles':
        return <Sparkles className="h-6 w-6" />;
      default:
        return <FlaskConical className="h-6 w-6" />;
    }
  };
  
  return (
    <div 
      ref={ref}
      className={`group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl
        ${inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
        }
        transition-all duration-700 ease-out`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10" />
      <img
        src={imageUrl}
        alt={title}
        className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
        <div className="flex items-center mb-3">
          <div className="mr-3 rounded-full bg-blue-600 p-2 text-white">
            {renderIcon()}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-100 text-sm">{description}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="DLT NOVA provides comprehensive manufacturing solutions tailored to your brand's unique needs"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageUrl={service.imageUrl}
              index={index}
            />
          ))}
        </div>
      </Container>

      <Container>
        <SectionHeading
          title="Our Products"
          subtitle="Explore our wide range of high-quality cosmetic products"
        />
        <div className="overflow-hidden">
          <iframe
            src="https://katalog.dltnova.com/galeri.php"
            width="100%"
            height="400"
            style={{ border: 'none', overflow: 'hidden' }}
            title="Our Products"
          />
        </div>
      </Container>
    </section>
  );
};

export default Services;
