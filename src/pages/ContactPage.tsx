import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { ContactForm } from '../components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Contact Us - DestinationWed"
        description="Get in touch with our wedding planning experts. We're here to help make your destination wedding dreams come true."
      />
      <Header />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
              <p className="text-gray-600">
                Have questions about planning your destination wedding? We're here to help!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'info@destinationwed.com',
                  link: 'mailto:info@destinationwed.com'
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '+1 (123) 456-7890',
                  link: 'tel:+11234567890'
                },
                {
                  icon: MapPin,
                  title: 'Office',
                  content: '123 Wedding Street, Suite 100, New York, NY 10001',
                  link: 'https://maps.google.com'
                }
              ].map(item => (
                <a
                  key={item.title}
                  href={item.link}
                  className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <item.icon className="w-6 h-6 mx-auto mb-4 text-rose-600" />
                  <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-600">{item.content}</p>
                </a>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}