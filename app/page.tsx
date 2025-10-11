"use client";

import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
  const [location, setLocation] = useState("");
  const [checkInOut, setCheckInOut] = useState("May 05 - June 14");
  const [guests, setGuests] = useState("2 adults - 1 children - 1 room");

  return (
    <div className="bg-white w-full flex flex-col">
      <header className="w-full bg-[#3f2c77] h-12 flex items-center justify-between px-4 md:px-8 lg:px-[103px]">
        <img
          className="w-[80px] h-[27px] md:w-[111px] md:h-[37px] bg-blend-multiply object-cover"
          alt="Screenshot"
          src="/figmaAssets/screenshot-2025-08-22-at-1-02-21-pm-1.png"
        />
        <div className="text-white text-xs [font-family:'Poppins',Helvetica] font-normal hidden md:block">
          info@hotelire.ca
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 cursor-pointer bg-transparent border-none outline-none">
              <img className="w-8 h-8" alt="User" src="/figmaAssets/image.png" />
              <div className="text-[#febc11] text-[13px] [font-family:'Poppins',Helvetica] font-bold hidden sm:block">
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

      <nav className="w-full bg-white min-h-[80px] lg:h-[111px] flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-[103px] py-4 lg:py-0 gap-4 lg:gap-0">
        <img
          className="w-[100px] h-[66px] lg:w-[141px] lg:h-[94px]"
          alt="Group"
          src="/figmaAssets/group-369.png"
        />

        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-12 [font-family:'Inter',Helvetica] font-bold text-black text-[15px] lg:text-[17px]">
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#3f2c77] transition-colors duration-200">
            HOME
            <ChevronDownIcon className="w-[13px] h-2" />
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#3f2c77] transition-colors duration-200">
            DESTINATIONS
            <ChevronDownIcon className="w-[13px] h-2" />
          </div>
          <div className="cursor-pointer hover:text-[#3f2c77] transition-colors duration-200">SEARCH</div>
          <div className="cursor-pointer hover:text-[#3f2c77] transition-colors duration-200">BLOG</div>
          <div className="cursor-pointer hover:text-[#3f2c77] transition-colors duration-200">CONTACT</div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
          <Button
            variant="outline"
            className="w-full sm:w-[160px] lg:w-[181px] h-[45px] lg:h-[55px] bg-[#f5f6fd] rounded-[5px] border border-solid border-[#d9d9d9] [font-family:'Poppins',Helvetica] font-semibold text-[#3f2c77] text-xs lg:text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
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
          <Button className="w-full sm:w-[160px] lg:w-[181px] h-[45px] lg:h-[55px] bg-[#febc11] rounded-[5px] [font-family:'Poppins',Helvetica] font-semibold text-[#3f2c77] text-xs lg:text-sm transition-all duration-200 hover:bg-[#febc11]/90 hover:scale-105 hover:shadow-lg">
            DISCOVER MORE
          </Button>
        </div>
      </nav>

      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[536px]">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Rectangle"
          src="/figmaAssets/rectangle-290.png"
        />
        <div className="absolute inset-0 bg-[#080808] opacity-50" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-[71px]">
            <div className="[text-shadow:4px_4px_4px_#00000040] [font-family:'Poppins',Helvetica] font-normal text-[20px] md:text-[30px] lg:text-[38px] mb-2 md:mb-4">
              <span className="text-white">Your </span>
              <span className="font-bold text-[#febc11]">perfect stay</span>
              <span className="text-white"> is one click away</span>
            </div>
            <div className="[text-shadow:4.45px_4.45px_4.45px_#00000040] [font-family:'Poppins',Helvetica] font-bold text-white text-[28px] md:text-[40px] lg:text-[53.3px]">
              Find Your Dream Luxury Hotel
            </div>
          </div>

          <div className="w-full max-w-[1240px] bg-white rounded flex flex-col md:flex-row items-stretch">
            <div className="flex-1 px-4 md:px-[33px] py-3 md:py-0 md:border-r border-[#e5e5e5] flex flex-col justify-center">
              <label className="[font-family:'Poppins',Helvetica] font-semibold text-[#3f2c77] text-[13px] md:text-[15px] mb-1">
                Location
              </label>
              <Input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Where are you going?"
                className="[font-family:'Poppins',Helvetica] font-normal text-[#919191] text-[12px] md:text-[13px] border-0 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#919191]"
              />
            </div>

            <div className="flex-1 px-4 md:px-6 py-3 md:py-0 md:border-r border-[#e5e5e5] relative flex flex-col justify-center">
              <label className="[font-family:'Poppins',Helvetica] font-semibold text-[#3f2c77] text-[13px] md:text-[15px] mb-1">
                Check in - Check out
              </label>
              <Input
                type="text"
                value={checkInOut}
                onChange={(e) => setCheckInOut(e.target.value)}
                className="[font-family:'Poppins',Helvetica] font-normal text-[#919191] text-[12px] md:text-[13px] border-0 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <ChevronDownIcon className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-3.5 h-2" />
            </div>

            <div className="flex-1 px-4 md:px-6 py-3 md:py-0 relative flex flex-col justify-center">
              <label className="[font-family:'Poppins',Helvetica] font-semibold text-[#3f2c77] text-[13px] md:text-[15px] mb-1">
                Guest
              </label>
              <Input
                type="text"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="[font-family:'Poppins',Helvetica] font-normal text-[#919191] text-[12px] md:text-[13px] border-0 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <ChevronDownIcon className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-3.5 h-2" />
            </div>

            <Button className="w-full md:w-20 lg:w-24 h-[60px] md:h-[75px] bg-[#febc11] rounded-[0px_0px_4px_4px] md:rounded-[0px_4px_4px_0px] transition-all duration-200 hover:bg-[#febc11]/90 hover:shadow-lg">
              <img
                className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]"
                alt="Search"
                src="/figmaAssets/group.png"
              />
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#e3fdff] py-12 md:py-16 lg:py-[81px] px-4 md:px-8 lg:px-[103px]">
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3f2c77] text-[22px] md:text-[26px] lg:text-[28px] mb-3">
          Explore Canada
        </h2>
        <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-base md:text-lg lg:text-xl mb-8 md:mb-10 lg:mb-[46px]">
          Most popular and trending destinations
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[7px]">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-none bg-transparent cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
            >
              <CardContent className="p-0">
                <img
                  className="w-full h-[180px] md:h-[200px] lg:h-[218px] rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                  alt={destination.name}
                  src={destination.image}
                />
                <div className="mt-4">
                  <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#3554d1] text-lg md:text-xl mb-2 transition-colors duration-200 group-hover:text-[#2a3fa8]">
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

        <Button className="w-10 h-10 bg-white rounded-[20px] shadow-[0px_4px_4px_#00000040] p-0 mt-16 md:mt-24 lg:mt-[133px] ml-auto flex transition-all duration-200 hover:bg-white/90 hover:scale-110 hover:shadow-xl">
          <img
            className="w-[19px] h-5"
            alt="Arrow"
            src="/figmaAssets/image-19-2.png"
          />
        </Button>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-[82px] px-4 md:px-8 lg:px-[103px]">
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3f2c77] text-[22px] md:text-[26px] lg:text-[28px] mb-3">
          Most Popular Hotels
        </h2>
        <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-base md:text-lg mb-8 md:mb-12 lg:mb-[54px]">
          Embark on your next adventure with confidence
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[7px]">
          {popularHotels.map((hotel, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-none bg-transparent cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
            >
              <CardContent className="p-0 flex flex-col h-full">
                <img
                  className="w-full h-[250px] md:h-[280px] lg:h-[308px] rounded-[5px] object-cover transition-transform duration-300 group-hover:scale-105"
                  alt={hotel.name}
                  src={hotel.image}
                />
                <div className="mt-4 flex-1 flex flex-col">
                  <p className="[font-family:'Inter',Helvetica] font-medium text-[#5f5f5f] text-sm md:text-base mb-2">
                    {hotel.type}
                  </p>
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#3f2c77] text-sm md:text-base mb-2 min-h-[40px] md:min-h-[48px] transition-colors duration-200 group-hover:text-[#2a2158]">
                    {hotel.name}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-black text-sm md:text-base mb-4">
                    {hotel.location}
                  </p>

                  <div className="flex items-start gap-4 mt-auto">
                    <div className="w-[55px] h-14 bg-[#3f2c77] rounded-[5px] flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-[#2a2158]">
                      <span className="font-bold text-[#fff2f2] text-base [font-family:'Inter',Helvetica]">
                        {hotel.rating}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <img
                        className="w-[96.5px] h-[15.55px]"
                        alt="Stars"
                        src={hotel.stars}
                      />
                      <span className="[font-family:'Inter',Helvetica] font-medium text-[#3f2c77] text-xs md:text-sm">
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

      <section className="w-full bg-[#eaffe6] py-12 md:py-16 lg:py-[102px] px-4 md:px-8 lg:px-[103px]">
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3f2c77] text-[22px] md:text-[26px] lg:text-[28px] mb-3">
          Offers
        </h2>
        <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-base md:text-lg mb-8 md:mb-12 lg:mb-[54px]">
          Promotions, deals and special offers for you
        </p>

        <div className="space-y-4 md:space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <img
              className="w-full md:w-[377px] h-[98px] rounded-lg object-cover transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
              alt="Yellow blue modern"
              src="/figmaAssets/yellow-blue-modern-travel-agency-billboard-2.png"
            />
            <img
              className="w-full md:flex-1 h-[99px] rounded-lg object-cover transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
              alt="Traveling banner"
              src="/figmaAssets/traveling--banner--landscape----728-x-90-mm--1.png"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-[756px] h-[110px] bg-[#6b371a] rounded-lg relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
              <div className="absolute top-[28px] left-[20px] md:left-[57px] z-10">
                <div className="[font-family:'Poppins',Helvetica] font-bold text-white text-[18px] md:text-[22px] leading-[25px] md:leading-[30.5px] mb-2">
                  Live the dream in a holiday home
                </div>
                <div className="text-[#e2a24b] text-xs md:text-sm leading-[16px] md:leading-[19.4px] [font-family:'Poppins',Helvetica]">
                  Choose form house, villas, chalets and more...!
                </div>
              </div>
              <img
                className="absolute top-0 right-[20px] md:right-[135px] w-[120px] md:w-[165px] h-[110px] object-cover"
                alt="Pngwing com"
                src="/figmaAssets/pngwing-com-1.png"
              />
            </div>
            <img
              className="w-full md:w-[436px] h-[110px] rounded-lg object-cover transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
              alt="Screenshot"
              src="/figmaAssets/screenshot-2025-09-03-at-6-00-16-am-1.png"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-[57px] px-4 md:px-8 lg:px-[103px]">
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3f2c77] text-[22px] md:text-[26px] lg:text-[28px] mb-3">
          Stay at our top unique properties
        </h2>
        <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-base md:text-lg lg:text-xl mb-8 md:mb-12 lg:mb-[54px]">
          From castles and villas to boats and igloos we&apos;ve got it all
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[7px]">
          {uniqueProperties.map((property, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-none bg-transparent cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
            >
              <CardContent className="p-0 flex flex-col h-full">
                <img
                  className="w-full h-[250px] md:h-[280px] lg:h-[308px] rounded-[5px] object-cover transition-transform duration-300 group-hover:scale-105"
                  alt={property.name}
                  src={property.image}
                />
                <div className="mt-4 flex-1 flex flex-col">
                  <p className="[font-family:'Inter',Helvetica] font-medium text-[#acacac] text-sm md:text-base mb-2">
                    {property.type}
                  </p>
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#3f2c77] text-sm md:text-base mb-2 min-h-[40px] md:min-h-[48px] transition-colors duration-200 group-hover:text-[#2a2158]">
                    {property.name}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-black text-sm md:text-base mb-4">
                    {property.location}
                  </p>

                  <div className="flex items-start gap-4 mt-auto">
                    <div className="w-[55px] h-14 bg-[#3f2c77] rounded-[5px] flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-[#2a2158]">
                      <span className="font-bold text-[#fff2f2] text-base [font-family:'Inter',Helvetica]">
                        {property.rating}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <img
                        className="w-[96.5px] h-[15.55px]"
                        alt="Stars"
                        src={property.stars}
                      />
                      <span className="[font-family:'Inter',Helvetica] font-medium text-[#3f2c77] text-xs md:text-sm">
                        {property.reviews}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button className="w-10 h-10 bg-white rounded-[20px] shadow-[0px_4px_4px_#00000040] p-0 mt-16 md:mt-24 lg:mt-[133px] ml-auto flex transition-all duration-200 hover:bg-white/90 hover:scale-110 hover:shadow-xl">
          <img
            className="w-[19px] h-5"
            alt="Arrow"
            src="/figmaAssets/image-19.png"
          />
        </Button>
      </section>

      <section className="w-full bg-[#e3fdff] py-12 md:py-16 lg:py-[81px] relative overflow-hidden">
        <div className="absolute top-[-45px] left-[210px] w-[244px] h-[498px] -rotate-90 bg-[linear-gradient(180deg,rgba(255,255,255,0)_56%,rgba(254,188,17,1)_89%)] hidden lg:block" />

        <img
          className="absolute top-0 left-0 w-full md:w-[581px] h-[200px] md:h-[326px] object-cover opacity-50 md:opacity-100"
          alt="Hotel owner"
          src="/figmaAssets/hotel-owner-1.png"
        />

        <div className="relative z-10 px-4 md:px-8 lg:ml-[622px] lg:mr-[103px] pt-[180px] md:pt-0">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#3f2c77] text-[22px] md:text-[26px] mb-6 md:mb-[37px]">
            Grow Your Business with Hotelire
          </h2>
          <p className="[font-family:'Poppins',Helvetica] font-medium text-black text-base md:text-lg mb-6 md:mb-[32px] max-w-[601px]">
            Join Hotelire and showcase your property to travelers looking for
            their next memorable stay.
          </p>
          <Button className="w-full md:w-[500px] lg:w-[612px] h-[55px] md:h-[68px] bg-[#3f2c77] rounded-[10px] [font-family:'Inter',Helvetica] font-bold text-white text-lg md:text-xl transition-all duration-200 hover:bg-[#2a2158] hover:scale-105 hover:shadow-xl">
            SIGN UP AS PROPERTY OWNER
          </Button>
        </div>
      </section>

      <footer className="w-full pt-12 md:pt-16 lg:pt-[114px] pb-0">
        <div className="px-4 md:px-8 lg:px-[103px] pb-12 md:pb-16 lg:pb-[108px]">
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 mb-12 md:mb-16 lg:mb-[108px]">
            <div className="flex flex-col">
              <img
                className="w-[140px] h-[93px] md:w-[163px] md:h-[108px] mb-6 md:mb-[39px]"
                alt="Group"
                src="/figmaAssets/group-370.png"
              />
              <div className="[font-family:'Inter',Helvetica] font-medium text-black text-base md:text-lg mb-3">
                Toll Free Customer Care
              </div>
              <div className="font-medium text-[#3f2c77] text-base md:text-lg [font-family:'Inter',Helvetica] mb-6 md:mb-9">
                +(1) 123 456 7890
              </div>
              <div className="[font-family:'Inter',Helvetica] font-bold text-[#febc11] text-base md:text-lg mb-3">
                Need live support?
              </div>
              <div className="text-[#3f2c77] text-base md:text-lg [font-family:'Poppins',Helvetica] font-normal">
                info@hotelire.ca
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="[font-family:'Inter',Helvetica] font-bold text-black text-[20px] md:text-[22px] mb-6 md:mb-[51px]">
                Discover
              </h3>
              {discoverLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="[font-family:'Inter',Helvetica] font-medium text-black text-[17px] md:text-[19px] mb-4 transition-colors duration-200 hover:text-[#3f2c77]"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex flex-col">
              <h3 className="[font-family:'Inter',Helvetica] font-bold text-black text-[20px] md:text-[22px] mb-6 md:mb-[51px]">
                Resources
              </h3>
              {resourceLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="[font-family:'Inter',Helvetica] font-medium text-black text-[17px] md:text-[19px] mb-4 transition-colors duration-200 hover:text-[#3f2c77]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-auto md:h-[52px] bg-[#3f2c77] flex items-center justify-center py-4 px-4">
          <p className="[font-family:'Inter',Helvetica] font-medium text-white text-[15px] md:text-[19px] text-center">
            Copyright © 2025 Hotelier.ca™. All Rights Reserved. Developed by
            Sasquatch Innovations
          </p>
        </div>
      </footer>
    </div>
  );
}
