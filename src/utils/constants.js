import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },

  {
    id: 2,
    text: "products",
    url: "/products",
  },
  {
    id: 3,
    text: "about",
    url: "/about",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiDiamondHard />,
    title: "Unique, Quality Selection",
    text: "We personally curate our home decor store, with over 25 years of experience within the retail and interior design markets.",
  },
  {
    id: 2,
    icon: <GiCompass />,
    title: "Worldwide",
    text: "Discover distinguished, quality products from renowned designers and brands, from the classic to the up-and-coming."

,
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "Personalized Customer Service",
    text: "Get personalized support and thoughtful recommendations directly from the owners and professional staff.",
  },
];

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
