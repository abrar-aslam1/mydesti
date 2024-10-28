export function generateVenueSchema(venue: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: venue.name,
    description: venue.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: venue.location
    },
    image: venue.images[0],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: venue.rating,
      bestRating: '5',
      worstRating: '1',
      reviewCount: venue.reviewCount || 0
    },
    amenityFeature: venue.amenities.map((amenity: string) => ({
      '@type': 'LocationFeatureSpecification',
      name: amenity
    })),
    priceRange: `$${venue.priceRange.min.toLocaleString()} - $${venue.priceRange.max.toLocaleString()}`,
    maximumAttendeeCapacity: venue.maxCapacity
  };
}

export function generateDestinationSchema(destination: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: `${destination.name}, ${destination.location}`,
    description: destination.description,
    image: destination.image,
    touristType: {
      '@type': 'Audience',
      audienceType: 'Wedding Couples'
    },
    includesAttraction: destination.features.map((feature: string) => ({
      '@type': 'TouristAttraction',
      name: feature
    })),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: destination.coordinates?.lat,
      longitude: destination.coordinates?.lng
    }
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DestinationWed',
    url: 'https://destinationwed.com',
    logo: 'https://destinationwed.com/logo.png',
    sameAs: [
      'https://facebook.com/destinationwed',
      'https://instagram.com/destinationwed',
      'https://twitter.com/destinationwed'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-123-456-7890',
      contactType: 'customer service',
      email: 'info@destinationwed.com',
      areaServed: 'Worldwide',
      availableLanguage: ['English']
    }
  };
}

export function generateBreadcrumbSchema(items: { label: string; href?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': item.href || '#',
        name: item.label
      }
    }))
  };
}