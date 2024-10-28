import React from 'react';
import { ArrowRight } from 'lucide-react';

interface RelatedItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  type: 'venue' | 'destination' | 'blog';
}

interface RelatedContentProps {
  items: RelatedItem[];
  title?: string;
}

export function RelatedContent({ items, title = 'You May Also Like' }: RelatedContentProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-rose-600">
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-rose-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center text-rose-600 text-sm font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}