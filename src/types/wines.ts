export type Wine = {
  id: number;
  title: string;
  averageRating?: number;
  description?: string;
  imageUrl?: string;
  link: string;
  price?: string;
  ratingCount?: number;
  score?: number;
};

export type WineResponse = {
  pairedWines: string[];
  pairingText: string;
  productMatches: Wine[];
};
