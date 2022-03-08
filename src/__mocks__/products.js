import { v4 as uuid } from 'uuid';

export const products = [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'Simple Yet powerful',
    media: '/static/images/products/product_1.png',
    title: 'Template 1'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'Simple Yet powerful',
    media: '/static/images/products/product_2.png',
    title: 'Template 2'
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: 'Simple Yet powerful',
    media: '/static/images/products/product_3.png',
    title: 'Template 3'
  }
];
