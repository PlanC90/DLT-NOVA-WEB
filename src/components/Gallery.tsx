import React, { useState } from 'react';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import { GALLERY_IMAGES } from '../constants';
import { useInView } from '../hooks/useInView';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredImages = filter === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'quality', label: 'Quality Control' },
    { value: 'packaging', label: 'Packaging' },
    { value: 'fragrance', label: 'Fragrances' },
    { value: 'skincare', label: 'Skincare' },
    { value: 'ingredients', label: 'Ingredients' },
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <Container>
        <SectionHeading
          title="Product Gallery"
          subtitle="Explore our manufacturing capabilities and product range"
        />

        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${filter === category.value 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'}
              `}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg shadow-md transition-all duration-500 cursor-pointer hover:shadow-lg
                ${inView 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95'
                }
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="relative aspect-[4/3] overflow-hidden group">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium text-lg">View</span>
                </div>
              </div>
              <div className="p-4 bg-white">
                <p className="text-gray-800 font-medium">{image.alt}</p>
                <p className="text-gray-500 text-sm capitalize">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery Preview" 
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </Container>
    </section>
  );
};

export default Gallery;
