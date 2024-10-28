import { Venue } from '../types';
import { venues } from '../data/venues';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  destinationId?: string;
}

interface SearchParams {
  destination?: string;
  date?: string;
  guests?: number;
  minPrice?: number;
  maxPrice?: number;
}

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    // In a real app, this would send data to a backend server
    // For now, we'll simulate an API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (!data.email || !data.name || !data.message) {
      throw new Error('Please fill in all required fields');
    }

    return {
      success: true,
      message: 'Thank you for your message. We will get back to you soon!'
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An error occurred'
    };
  }
}

export async function searchVenues(params: SearchParams): Promise<Venue[]> {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return venues.filter(venue => {
      const matchesDestination = !params.destination || 
        venue.location.toLowerCase().includes(params.destination.toLowerCase());
      
      const matchesCapacity = !params.guests || 
        venue.maxCapacity >= params.guests;
      
      const matchesPrice = (!params.minPrice || venue.priceRange.min >= params.minPrice) &&
        (!params.maxPrice || venue.priceRange.max <= params.maxPrice);

      return matchesDestination && matchesCapacity && matchesPrice;
    });
  } catch (error) {
    console.error('Error searching venues:', error);
    return [];
  }
}