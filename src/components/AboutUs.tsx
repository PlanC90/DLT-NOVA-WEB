import React, { useEffect, useState } from 'react';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import { useInView } from '../hooks/useInView';

const AboutUs: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const animationClass = (delay: number) => 
    hasAnimated 
      ? `opacity-100 translate-y-0 transition-all duration-1000 ease-out delay-${delay}` 
      : 'opacity-0 translate-y-8';

  return (
    <section id="about" className="py-24 bg-gray-50">
      <Container>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={animationClass(0)}>
            <SectionHeading 
              title="About DLT NOVA" 
              centered={false}
            />
            <div className="space-y-6 text-gray-600">
              <p className="text-lg">
                Established in 1996, DLT Foreign Trade continues its trading life as DLT NOVA.
                The purchasing and foreign trade experience of its founders puts the company in the 
                foreground in terms of product supply and export.
              </p>
              <p className="text-lg">
                Beside the production of Cosmetic Products, the professional sales team—who has 
                mastered many country languages—responds to various product needs globally.
              </p>
              <div className="pt-4">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 mr-4">
                    <span className="text-lg font-bold">25+</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Years of Experience</h3>
                    <p className="text-sm text-gray-500">Serving global markets since 1996</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 mr-4">
                    <span className="text-lg font-bold">50+</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Countries Served</h3>
                    <p className="text-sm text-gray-500">Global reach with localized knowledge</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 mr-4">
                    <span className="text-lg font-bold">∞</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Possibilities</h3>
                    <p className="text-sm text-gray-500">Custom solutions for your unique brand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`relative ${animationClass(300)}`}>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-200 rounded-lg opacity-50"></div>
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/5427664/pexels-photo-5427664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="DLT NOVA manufacturing facility"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-100 rounded-lg opacity-50"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
