import { Destination, Hotel, Property } from "@/types";

// This data will be replaced with API calls in production
// For now, keeping as reference data that matches the design

export const destinations: Destination[] = [
  {
    id: "1",
    name: "Niagara Falls",
    properties: "390 properties",
    image: "/figmaAssets/rectangle-305.png",
  },
  {
    id: "2",
    name: "Niagara on the Lake",
    properties: "124 properties",
    image: "/figmaAssets/rectangle-306.png",
  },
  {
    id: "3",
    name: "Montreal",
    properties: "1390 properties",
    image: "/figmaAssets/rectangle-307.png",
  },
  {
    id: "4",
    name: "Quebec City",
    properties: "554 properties",
    image: "/figmaAssets/rectangle-308.png",
  },
];

export const popularHotels: Hotel[] = [
  {
    id: "1",
    name: "The Montcalm At Brewery London City",
    location: "Westminster Borough , London",
    type: "Luxury Hotel",
    rating: "4.7",
    reviews: "3014 reviews",
    image: "/figmaAssets/rectangle-149-4.png",
    stars: "/figmaAssets/group-316-1.png",
  },
  {
    id: "2",
    name: "Hillcrest Motel",
    location: "Westminster Borough , London",
    type: "Lakeside Chalet",
    rating: "3.7",
    reviews: "3014 reviews",
    image: "/figmaAssets/rectangle-315.png",
    stars: "/figmaAssets/group-316.png",
  },
  {
    id: "3",
    name: "Sterling Rentals",
    location: "Westminster Borough , London",
    type: "Penthouse",
    rating: "4.0",
    reviews: "3014 reviews",
    image: "/figmaAssets/rectangle-316.png",
    stars: "/figmaAssets/group-316-2.png",
  },
  {
    id: "4",
    name: "Liberty Suites",
    location: "Westminster Borough , London",
    type: "Resort",
    rating: "3.1",
    reviews: "3014 reviews",
    image: "/figmaAssets/rectangle-149-6.png",
    stars: "/figmaAssets/group-316-3.png",
  },
];

export const uniqueProperties: Property[] = [
  {
    id: "1",
    name: "The Montcalm At Brewery London City",
    location: "Westminster Borough , Canada",
    type: "Luxury Hotel",
    rating: "4.7",
    reviews: "3014 reviews",
    image: "/figmaAssets/rectangle-149.png",
    stars: "/figmaAssets/group-316-4.png",
  },
  {
    id: "2",
    name: "Cannery Lofts Niagara",
    location: "Westminster Borough , Canada",
    type: "Lakeside Chalet",
    rating: "3.7",
    reviews: "3014 reviews",
    image: "/figmaAssets/rectangle-149-1.png",
    stars: "/figmaAssets/group-316-5.png",
  },
  {
    id: "3",
    name: "Country Inn & Suites by Radisson, Niagara Falls",
    location: "Westminster Borough , Canada",
    type: "Penthouse",
    rating: "4.0",
    reviews: "3014 reviews",
    image: "/figmaAssets/rectangle-149-2.png",
    stars: "/figmaAssets/group-316-6.png",
  },
  {
    id: "4",
    name: "Sheraton Fallsview Hotel",
    location: "Westminster Borough , Canada",
    type: "Hotel",
    rating: "3.1",
    reviews: "3014 reviews",
    image: "/figmaAssets/rectangle-149-3.png",
    stars: "/figmaAssets/group-316-7.png",
  },
];

export const discoverLinks = [
  { id: "1", label: "About Us", href: "/about" },
  { id: "2", label: "Contact Us", href: "/contact" },
  { id: "3", label: "Faqs", href: "/faqs" },
  { id: "4", label: "Privacy Policy", href: "/privacy" },
  { id: "5", label: "Disclaimer", href: "/disclaimer" },
];

export const resourceLinks = [
  { id: "1", label: "Blog title 1", href: "/blog/1" },
  { id: "2", label: "Blog title 2", href: "/blog/2" },
  { id: "3", label: "Blog title 3", href: "/blog/3" },
  { id: "4", label: "Blog title 4", href: "/blog/4" },
];
