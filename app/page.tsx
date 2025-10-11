"use client";

import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const destinations = [
  {
    name: "Niagara Falls",
    properties: "390 properties",
    image: "/figmaAssets/rectangle-305.png",
  },
  {
    name: "Niagara on the Lake",
    properties: "124 properties",
    image: "/figmaAssets/rectangle-306.png",
  },
  {
    name: "Montreal",
    properties: "1390 properties",
    image: "/figmaAssets/rectangle-307.png",
  },
  {
    name: "Quebec City",
    properties: "554 properties",
    image: "/figmaAssets/rectangle-308.png",
  },
];

const popularHotels = [
  {
    name: "The Montcalm At Brewery London City",
    location: "Westminster Borough , London",
    type: "Luxury Hotel",
    rating: "4.7",
    reviews: "3014 reviews",
    image: "/figmaAssets/rectangle-149-4.png",
    stars: "/figmaAssets/group-316-1.png",
  },
  {
    name: "Hillcrest Motel",
    location: "Westminster Borough , London",
    type: "Lakeside Chalet",
    rating: "3.7",
    reviews: "3014 reviews",
    image: "/figmaAssets/rectangle-315.png",
    stars: "/figmaAssets/group-316.png",
  },
  {
    name: "Sterling Rentals",
    location: "Westminster Borough , London",
    type: "Penthouse",
    rating: "4.0",
    reviews: "3014 reviews",
    image: "/figmaAssets/rectangle-316.png",
    stars: "/figmaAssets/group-316-2.png",
  },
  {
    name: "Liberty Suites",
    location: "Westminster Borough , London",
    type: "Resort",
    rating: "3.1",
    reviews: "3014 reviews",
    image: "/figmaAssets/rectangle-149-6.png",
    stars: "/figmaAssets/group-316-3.png",
  },
];

const uniqueProperties = [
  {
    name: "The Montcalm At Brewery London City",
    location: "Westminster Borough , Canada",
    type: "Luxury Hotel",
    rating: "4.7",
    reviews: "3014 reviews",
    image: "/figmaAssets/rectangle-149.png",
    stars: "/figmaAssets/group-316-4.png",
  },
  {
    name: "Cannery Lofts Niagara",
    location: "Westminster Borough , Canada",
    type: "Lakeside Chalet",
    rating: "3.7",
    reviews: "3014 reviews",
    image: "/figmaAssets/rectangle-149-1.png",
    stars: "/figmaAssets/group-316-5.png",
  },
  {
    name: "Country Inn & Suites by Radisson, Niagara Falls",
    location: "Westminster Borough , Canada",
    type: "Penthouse",
    rating: "4.0",
    reviews: "3014 reviews",
    image: "/figmaAssets/rectangle-149-2.png",
    stars: "/figmaAssets/group-316-6.png",
  },
  {
    name: "Sheraton Fallsview Hotel",
    location: "Westminster Borough , Canada",
    type: "Hotel",
    rating: "3.1",
    reviews: "3014 reviews",
    image: "/figmaAssets/rectangle-149-3.png",
    stars: "/figmaAssets/group-316-7.png",
  },
];

const discoverLinks = [
  "About Us",
  "Contact Us",
  "Faqs",
  "Privacy Policy",
  "Disclaimer",
];

const resourceLinks = [
  "Blog title 1",
  "Blog title 2",
  "Blog title 3",
  "Blog title 4",
];

export default function Home() {
  return (
    <div className="bg-white w-full min-w-[1440px] flex flex-col">
      <header className="w-full bg-[#3f2c77] h-12 flex items-center justify-between px-[103px]">
        <img
          className="w-[111px] h-[37px] bg-blend-multiply object-cover"
          alt="Screenshot"
          src="/figmaAssets/screenshot-2025-08-22-at-1-02-21-pm-1.png"
        />
        <div className="text-white text-xs [font-family:'Poppins',Helvetica] font-normal">
          info@hotelire.ca
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 cursor-pointer bg-transparent border-none outline-none">
              <img className="w-8 h-8" alt="User" src="/figmaAssets/image.png" />
              <div className="text-[#febc11] text-[13px] [font-family:'Poppins',Helvetica] font-bold">
                Allison
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[131px] bg-[#f5f6fdf0] rounded-[0px_0px_4px_4px] p-4 shadow-md">
            <DropdownMenuItem className="[font-family:'Poppins',Helvetica] font-medium text-[#3f2c77] text-[11px] leading-[30px] cursor-pointer">
              My Account
            </DropdownMenuItem>
            <DropdownMenuItem className="[font-family:'Poppins',Helvetica] font-medium text-[#3f2c77] text-[11px] leading-[30px] cursor-pointer">
              My Trips
            </DropdownMenuItem>
            <DropdownMenuItem className="[font-family:'Poppins',Helvetica] font-medium text-[#3f2c77] text-[11px] leading-[30px] cursor-pointer">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      <nav className="w-full bg-white h-[111px] flex items-center justify-between px-[103px] relative">
        <img
          className="w-[141px] h-[94px]"
          alt="Group"
          src="/figmaAssets/group-369.png"
        />

        <div className="flex items-center gap-12 [font-family:'Inter',Helvetica] font-bold text-black text-[17px]">
          <div className="flex items-center gap-2 cursor-pointer">
            HOME
            <ChevronDownIcon className="w-[13px] h-2" />
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            DESTINATIONS
            <ChevronDownIcon className="w-[13px] h-2" />
          </div>
          <div>SEARCH</div>
          <div>BLOG</div>
          <div>CONTACT</div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            className="w-[181px] h-[55px] bg-[#f5f6fd] rounded-[5px] border border-solid border-[#d9d9d9] [font-family:'Poppins',Helvetica] font-semibold text-[#3f2c77] text-sm h-auto"
            asChild
          >
            <a
              href="https://join.booking.com/?label=en-pk-booking-desktop-732gBu1H4WlF1HDSvlYKKAS652796017653%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-334108349%3Alp9077135%3Ali%3Adec%3Adm&amp;sid=b10e84dbba60a38b0163a95d893403d3&amp;gclid=CjwKCAjwq9rFBhAIEiwAGVAZPxG9tnO-tw2Kt0COs9wP8Aaro3-SLvVcv4WR-5oL_x39wFVvhiRQJxoCxssQAvD_BwE&amp;aid=2311236&amp;lang=en-gb&amp;utm_medium=frontend&amp;utm_source=topbar"
              rel="noopener noreferrer"
              target="_blank"
            >
              LIST YOUR PROPERTY
            </a>
          </Button>
          <Button className="w-[181px] h-[55px] bg-[#febc11] rounded-[5px] [font-family:'Poppins',Helvetica] font-semibold text-[#3f2c77] text-sm h-auto hover:bg-[#febc11]/90">
            DISCOVER MORE
          </Button>
        </div>
      </nav>

      <section className="relative w-full h-[536px]">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Rectangle"
          src="/figmaAssets/rectangle-290.png"
        />
        <div className="absolute inset-0 bg-[#080808] opacity-50" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <div className="text-center mb-[71px]">
            <div className="[text-shadow:4px_4px_4px_#00000040] [font-family:'Poppins',Helvetica] font-normal text-[38px] mb-4 whitespace-nowrap">
              <span className="text-white">Your </span>
              <span className="font-bold text-[#febc11]">perfect stay</span>
              <span className="text-white"> is one click away</span>
            </div>
            <div className="[text-shadow:4.45px_4.45px_4.45px_#00000040] [font-family:'Poppins',Helvetica] font-bold text-white text-[53.3px]">
              Find Your Dream Luxury Hotel
            </div>
          </div>

          <div className="w-[1240px] h-[75px] bg-white rounded flex items-center">
            <div className="flex-1 px-[33px] border-r border-[#e5e5e5]">
              <div className="[font-family:'Poppins',Helvetica] font-semibold text-[#3f2c77] text-[15px] mb-1">
                Location
              </div>
              <div className="[font-family:'Poppins',Helvetica] font-normal text-[#919191] text-[13px]">
                Where are you going?
              </div>
            </div>

            <div className="flex-1 px-6 border-r border-[#e5e5e5] relative">
              <div className="[font-family:'Poppins',Helvetica] font-semibold text-[#3f2c77] text-[15px] mb-1">
                Check in - Check out
              </div>
              <div className="[font-family:'Poppins',Helvetica] font-normal text-[#919191] text-[13px]">
                May 05 - June 14
              </div>
              <ChevronDownIcon className="absolute right-6 top-1/2 -translate-y-1/2 w-3.5 h-2" />
            </div>

            <div className="flex-1 px-6 relative">
              <div className="[font-family:'Poppins',Helvetica] font-semibold text-[#3f2c77] text-[15px] mb-1">
                Guest
              </div>
              <div className="[font-family:'Poppins',Helvetica] font-normal text-[#919191] text-[13px]">
                2 adults -1 children -1 room
              </div>
              <ChevronDownIcon className="absolute right-6 top-1/2 -translate-y-1/2 w-3.5 h-2" />
            </div>

            <Button className="w-24 h-[75px] bg-[#febc11] rounded-[0px_4px_4px_0px] hover:bg-[#febc11]/90">
              <img
                className="w-[30px] h-[30px]"
                alt="Search"
                src="/figmaAssets/group.png"
              />
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#e3fdff] py-[81px] px-[103px]">
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3f2c77] text-[28px] mb-3">
          Explore Canada
        </h2>
        <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-xl mb-[46px]">
          Most popular and trending destinations
        </p>

        <div className="grid grid-cols-4 gap-[7px]">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-none bg-transparent cursor-pointer"
            >
              <CardContent className="p-0">
                <img
                  className="w-full h-[218px] rounded-lg object-cover"
                  alt={destination.name}
                  src={destination.image}
                />
                <div className="mt-4">
                  <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#3554d1] text-xl mb-2">
                    {destination.name}
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-[#3f2c77] text-sm">
                    {destination.properties}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button className="w-10 h-10 bg-white rounded-[20px] shadow-[0px_4px_4px_#00000040] p-0 mt-[133px] ml-auto flex hover:bg-white/90">
          <img
            className="w-[19px] h-5"
            alt="Arrow"
            src="/figmaAssets/image-19-2.png"
          />
        </Button>
      </section>

      <section className="w-full py-[82px] px-[103px]">
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3f2c77] text-[28px] mb-3">
          Most Popular Hotels
        </h2>
        <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-lg mb-[54px]">
          Embark on your next adventure with confidence
        </p>

        <div className="grid grid-cols-4 gap-[7px]">
          {popularHotels.map((hotel, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-none bg-transparent cursor-pointer"
            >
              <CardContent className="p-0">
                <img
                  className="w-full h-[308px] rounded-[5px] object-cover"
                  alt={hotel.name}
                  src={hotel.image}
                />
                <div className="mt-4">
                  <p className="[font-family:'Inter',Helvetica] font-medium text-[#5f5f5f] text-base mb-2">
                    {hotel.type}
                  </p>
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#3f2c77] text-base mb-2">
                    {hotel.name}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-black text-base mb-4">
                    {hotel.location}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-[55px] h-14 bg-[#3f2c77] rounded-[5px] flex items-center justify-center">
                      <span className="font-bold text-[#fff2f2] text-base [font-family:'Inter',Helvetica]">
                        {hotel.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-[29.5px]">
                      <img
                        className="w-[96.5px] h-[15.55px]"
                        alt="Stars"
                        src={hotel.stars}
                      />
                      <span className="[font-family:'Inter',Helvetica] font-medium text-[#3f2c77] text-sm">
                        {hotel.reviews}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="w-full bg-[#eaffe6] py-[102px] px-[103px]">
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3f2c77] text-[28px] mb-3">
          Offers
        </h2>
        <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-lg mb-[54px]">
          Promotions, deals and special offers for you
        </p>

        <div className="space-y-6">
          <div className="flex gap-4">
            <img
              className="w-[377px] h-[98px] rounded-lg object-cover"
              alt="Yellow blue modern"
              src="/figmaAssets/yellow-blue-modern-travel-agency-billboard-2.png"
            />
            <img
              className="flex-1 h-[99px] rounded-lg object-cover"
              alt="Traveling banner"
              src="/figmaAssets/traveling--banner--landscape----728-x-90-mm--1.png"
            />
          </div>

          <div className="flex gap-4">
            <div className="w-[756px] h-[110px] bg-[#6b371a] rounded-lg relative overflow-hidden">
              <div className="absolute top-[28px] left-[57px] z-10">
                <div className="[font-family:'Poppins',Helvetica] font-bold text-white text-[22px] leading-[30.5px] mb-2">
                  Live the dream in a holiday home
                </div>
                <div className="text-[#e2a24b] text-sm leading-[19.4px] [font-family:'Poppins',Helvetica]">
                  Choose form house, villas, chalets and more...!
                </div>
              </div>
              <img
                className="absolute top-0 right-[135px] w-[165px] h-[110px] object-cover"
                alt="Pngwing com"
                src="/figmaAssets/pngwing-com-1.png"
              />
            </div>
            <img
              className="w-[436px] h-[110px] rounded-lg object-cover"
              alt="Screenshot"
              src="/figmaAssets/screenshot-2025-09-03-at-6-00-16-am-1.png"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-[57px] px-[103px]">
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3f2c77] text-[28px] mb-3">
          Stay at out top unique properties
        </h2>
        <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-xl mb-[54px]">
          From castles and villas to boats and igloos we&apos;ve got it all
        </p>

        <div className="grid grid-cols-4 gap-[7px]">
          {uniqueProperties.map((property, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-none bg-transparent cursor-pointer"
            >
              <CardContent className="p-0">
                <img
                  className="w-full h-[308px] rounded-[5px] object-cover"
                  alt={property.name}
                  src={property.image}
                />
                <div className="mt-4">
                  <p className="[font-family:'Inter',Helvetica] font-medium text-[#acacac] text-base mb-2">
                    {property.type}
                  </p>
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#3f2c77] text-base mb-2">
                    {property.name}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-black text-base mb-4">
                    {property.location}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-[55px] h-14 bg-[#3f2c77] rounded-[5px] flex items-center justify-center">
                      <span className="font-bold text-[#fff2f2] text-base [font-family:'Inter',Helvetica]">
                        {property.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-[29.5px]">
                      <img
                        className="w-[96.5px] h-[15.55px]"
                        alt="Stars"
                        src={property.stars}
                      />
                      <span className="[font-family:'Inter',Helvetica] font-medium text-[#3f2c77] text-sm">
                        {property.reviews}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button className="w-10 h-10 bg-white rounded-[20px] shadow-[0px_4px_4px_#00000040] p-0 mt-[133px] ml-auto flex hover:bg-white/90">
          <img
            className="w-[19px] h-5"
            alt="Arrow"
            src="/figmaAssets/image-19.png"
          />
        </Button>
      </section>

      <section className="w-full bg-[#e3fdff] py-[81px] relative overflow-hidden">
        <div className="absolute top-[-45px] left-[210px] w-[244px] h-[498px] -rotate-90 bg-[linear-gradient(180deg,rgba(255,255,255,0)_56%,rgba(254,188,17,1)_89%)]" />

        <img
          className="absolute top-0 left-0 w-[581px] h-[326px] object-cover"
          alt="Hotel owner"
          src="/figmaAssets/hotel-owner-1.png"
        />

        <div className="relative z-10 ml-[622px] mr-[103px]">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#3f2c77] text-[26px] mb-[37px]">
            Grow Your Business with Hotelire
          </h2>
          <p className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg mb-[32px] max-w-[601px]">
            Join Hotelire and showcase your property to travelers looking for
            their next memorable stay.
          </p>
          <Button className="w-[612px] h-[68px] bg-[#3f2c77] rounded-[10px] [font-family:'Inter',Helvetica] font-bold text-white text-xl hover:bg-[#3f2c77]/90 h-auto">
            SIGN UP AS PROPERTY OWNER
          </Button>
        </div>
      </section>

      <footer className="w-full pt-[114px] pb-0">
        <div className="px-[103px] pb-[108px]">
          <div className="flex justify-between mb-[108px]">
            <div className="flex flex-col">
              <img
                className="w-[163px] h-[108px] mb-[39px]"
                alt="Group"
                src="/figmaAssets/group-370.png"
              />
              <div className="[font-family:'Inter',Helvetica] font-medium text-black text-lg mb-3">
                Toll Free Customer Care
              </div>
              <div className="font-medium text-[#3f2c77] text-lg [font-family:'Inter',Helvetica] mb-9">
                +(1) 123 456 7890
              </div>
              <div className="[font-family:'Inter',Helvetica] font-bold text-[#febc11] text-lg mb-3">
                Need live support?
              </div>
              <div className="text-[#3f2c77] text-lg [font-family:'Poppins',Helvetica] font-normal">
                info@hotelire.ca
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="[font-family:'Inter',Helvetica] font-bold text-black text-[22px] mb-[51px]">
                Discover
              </h3>
              {discoverLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="[font-family:'Inter',Helvetica] font-medium text-black text-[19px] mb-4 hover:text-[#3f2c77]"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex flex-col">
              <h3 className="[font-family:'Inter',Helvetica] font-bold text-black text-[22px] mb-[51px]">
                Resources
              </h3>
              {resourceLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="[font-family:'Inter',Helvetica] font-medium text-black text-[19px] mb-4 hover:text-[#3f2c77]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[52px] bg-[#3f2c77] flex items-center justify-center">
          <p className="[font-family:'Inter',Helvetica] font-medium text-white text-[19px]">
            Copyright © 2025 Hotelier.ca™. All Rights Reserved. Developed by
            Sasquatch Innovations
          </p>
        </div>
      </footer>
    </div>
  );
}
