import React from 'react';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import { Mail, Phone, MapPin, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { WHATSAPP_NUMBER } from '../constants';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <Container>
        <SectionHeading
          title="Contact Us"
          subtitle="Get in touch with our team to discuss your manufacturing needs"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            ref={ref}
            className={`bg-primary text-white p-8 rounded-lg shadow-lg
              ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
              transition-all duration-1000 ease-out lg:col-span-2
            `}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div className="ml-4">
                  <p className="font-medium">Phone</p>
                  <p className="mt-1">+90 212 452 96 96</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div className="ml-4">
                  <p className="font-medium">Email</p>
                  <p className="mt-1">info@dltnova.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div className="ml-4">
                  <p className="font-medium">Address</p>
                  <p className="mt-1">
                    Degirmenbahce Cad. Yenibosna Merkez Mah.<br />
                    AirPort Hill No: 11E / 24<br />
                    Bahçelievler / İSTANBUL – TURKEY
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-accent">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-accent">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-accent">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
