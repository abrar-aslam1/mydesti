import React from 'react';
import { Feature } from '../types';

export function FeatureCard({ icon: Icon, title, description }: Feature) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center transform hover:scale-[1.02] transition-transform duration-300">
      <Icon className="w-12 h-12 mx-auto mb-4 text-rose-600" />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}