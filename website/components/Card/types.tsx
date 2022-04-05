import { StaticImageData } from 'next/image';

/**
 * Card properties
 */
export interface ICard {
  title: string;
  tags?: string[];
  description: string;
  image?: IImage;
  price: number;
}

/**
 * Nextjs <Image/> component type
 */
export type IImage = {
  height: string;
  width: string;
  alt: string;
  source: string | StaticImageData;
};
