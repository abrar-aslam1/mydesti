import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
      <ol className="flex items-center space-x-2">
        <li>
          <a
            href="/"
            className="text-gray-500 hover:text-rose-600 transition-colors flex items-center"
          >
            <Home className="w-4 h-4" />
            <span className="sr-only">Home</span>
          </a>
        </li>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {index === items.length - 1 ? (
              <span className="text-gray-800 font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <a
                href={item.href}
                className="text-gray-500 hover:text-rose-600 transition-colors"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}