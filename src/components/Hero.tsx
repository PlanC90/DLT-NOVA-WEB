import React, { useEffect, useState } from 'react';
import Button from './ui/Button';

const CATALOG_URL = 'https://view.publitas.com/rookka/dlt-nova-urun-katalog-mk88jkgdg6qx/page/1';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleLearnMoreClick = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCatalogClick = () => {
    window.open(CATALOG_URL, '_blank');
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          filter: 'brightness(0.4)',
          transform: loaded ? 'scale(1)' : 'scale(1.1)',
          transition: 'transform 1.5s ease-out, filter 1.5s ease-out',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            transition-all duration-1000 ease-out
          `}
        >
          <span className="block">Cosmetic Manufacturing &</span>
          <span className="block mt-2">Perfume Manufacturing</span>
        </h1>

        <p
          className={`text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-8
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            transition-all duration-1000 delay-300 ease-out
          `}
        >
          Crafting exquisite perfumes, room fragrances, and essential oils since 1996
        </p>

        <div
          className={`flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            transition-all duration-1000 delay-500 ease-out
          `}
        >
          <Button
            size="lg"
            onClick={handleCatalogClick}
            className="bg-accent hover:bg-accent-dark text-black"
          >
            View Catalog
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-purple-500 hover:bg-purple-700 text-white border-purple-500"
            onClick={handleLearnMoreClick}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
