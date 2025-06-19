export interface Galaxy {
  id: number;
  name: string;
  type: 'espiral' | 'elíptica' | 'irregular';
  distanceMillionsLy: number;
  starsEstimate: number;
  constellation: string;
  discoveredOn: Date;
  imageUrl?: string;
}
