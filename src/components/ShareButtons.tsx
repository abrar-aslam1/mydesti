import React from 'react';
import { Share2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

interface ShareButtonsProps {
  url: string;
  title: string;
  description?: string;
}

export function ShareButtons({ url, title, description }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description || '');

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'bg-[#1877f2] hover:bg-[#166fe5]'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'bg-[#1da1f2] hover:bg-[#1a91da]'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
      color: 'bg-[#0a66c2] hover:bg-[#095196]'
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
      color: 'bg-gray-600 hover:bg-gray-700'
    }
  ];

  return (
    <div className="flex flex-col items-start space-y-4">
      <div className="flex items-center text-gray-600">
        <Share2 className="w-5 h-5 mr-2" />
        <span className="font-medium">Share this</span>
      </div>
      <div className="flex space-x-2">
        {shareLinks.map(({ name, icon: Icon, url, color }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${color} text-white p-2 rounded-full transition-colors duration-300`}
            aria-label={`Share on ${name}`}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
}