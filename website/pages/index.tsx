/**
 * @file home page for website
 */

import pizza from '../public/pizza.jpg';
import Menu from '../components/Menu/Menu';
import type { IImage } from '../components/Card/types';

import type { Section } from '@/types/';
export default function Home() {
  const image: IImage = {
    alt: 'some text alt',
    width: '500px',
    height: '500px',
    source: pizza,
  };
  let sections: Section[] = [
    {
      name: 'Breakfest',
      sectionLink: 'breakfest',
      menuItem: [
        {
          name: 'Taco',
          description: 'Yummy taco',
          price: 1,
        },
        {
          name: 'Really long taco name with some stuff pie',
          description: 'Yummy pie',
          price: 1,
        },
      ],
    },
    {
      name: 'Lunch',
      sectionLink: 'lunch',
      menuItem: [
        {
          name: 'Pie',
          description: 'Yummy pie',
          price: 1,
        },
        {
          name: ' pie',
          description: 'Yummy pie',
          price: 1,
        },
      ],
    },
    {
      name: 'Dinner',
      sectionLink: 'dinner',
      menuItem: [
        {
          name: 'Dinner',
          description: 'Yummy  Dinner pie',
          price: 1,
        },
        {
          name: ' pie',
          description: 'Yummy pie',
          price: 1,
        },
        {
          name: 'Dinner',
          description: 'Yummy  Dinner pie',
          price: 1,
        },
        {
          name: ' pie',
          description: 'Yummy pie',
          price: 1,
        },
        {
          name: 'Dinner',
          description: 'Yummy  Dinner pie',
          price: 1,
        },
        {
          name: ' pie',
          description: 'Yummy pie',
          price: 1,
        },
      ],
    },
    {
      name: 'Dessert',
      sectionLink: 'dessert',
      menuItem: [
        {
          name: 'Pie',
          description: 'Yummy pie',
          price: 1,
        },
        {
          name: ' pie',
          description: 'Yummy pie',
          price: 1,
        },
      ],
    },
  ];

  return <Menu section={sections} />;
}
