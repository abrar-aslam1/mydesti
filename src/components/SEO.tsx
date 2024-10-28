import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  imageUrl?: string;
  jsonLd?: Record<string, any>;
  alternateUrls?: { [key: string]: string };
}

export function SEO({ 
  title = 'DestinationWed - Find Your Dream Wedding Location',
  description = 'Discover beautiful wedding venues and expert planners for your destination wedding.',
  canonicalUrl = 'https://destinationwed.com',
  imageUrl = '/og-image.jpg',
  jsonLd,
  alternateUrls
}: SEOProps) {
  const baseUrl = 'https://destinationwed.com';
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`;

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="DestinationWed" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Alternate Language URLs */}
      {alternateUrls && Object.entries(alternateUrls).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#e11d48" />
      <meta name="format-detection" content="telephone=no" />
    </Helmet>
  );
}