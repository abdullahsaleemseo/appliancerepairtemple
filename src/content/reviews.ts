export type Review = {
  author: string;
  area?: string;
  rating: number;
  text: string;
  source: 'Google' | 'Yelp' | 'Facebook';
  date: string;
  service?: string;
  verified: boolean;
};

/**
 * Add real reviews here, copied exactly as posted, with the platform and date.
 * Only entries with verified: true are ever displayed.
 */
export const reviews: Review[] = [];

/** Review platforms. Add a URL only for profiles that exist. */
export const reviewPlatforms: { name: Review['source']; url: string; leaveReviewUrl?: string }[] = [];
