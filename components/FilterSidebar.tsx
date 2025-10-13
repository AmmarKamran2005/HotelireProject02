"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedStars, setSelectedStars] = useState<number[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const amenities = [
    "Free WiFi",
    "Parking",
    "Pool",
    "Gym",
    "Restaurant",
    "Bar",
    "Spa",
    "Pet Friendly",
    "Room Service",
    "Air Conditioning",
  ];

  const propertyTypes = [
    "Hotel",
    "Resort",
    "Motel",
    "Bed & Breakfast",
    "Apartment",
    "Villa",
    "Hostel",
  ];

  const toggleStar = (star: number) => {
    setSelectedStars((prev) =>
      prev.includes(star) ? prev.filter((s) => s !== star) : [...prev, star]
    );
  };

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
    );
  };

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const clearFilters = () => {
    setPriceRange([0, 1000]);
    setSelectedStars([]);
    setSelectedAmenities([]);
    setSelectedTypes([]);
  };

  return (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#3f2c77] text-base mb-4">
          Price Range
        </h3>
        <div className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={1000}
            step={10}
            className="w-full"
            data-testid="slider-price-range"
          />
          <div className="flex items-center justify-between">
            <span className="[font-family:'Inter',Helvetica] text-sm text-gray-600">
              ${priceRange[0]}
            </span>
            <span className="[font-family:'Inter',Helvetica] text-sm text-gray-600">
              ${priceRange[1]}
            </span>
          </div>
        </div>
      </div>

      {/* Star Rating */}
      <div>
        <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#3f2c77] text-base mb-4">
          Star Rating
        </h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((stars) => (
            <div key={stars} className="flex items-center space-x-2">
              <Checkbox
                id={`stars-${stars}`}
                checked={selectedStars.includes(stars)}
                onCheckedChange={() => toggleStar(stars)}
                data-testid={`checkbox-stars-${stars}`}
              />
              <Label
                htmlFor={`stars-${stars}`}
                className="flex items-center gap-1 cursor-pointer [font-family:'Inter',Helvetica] text-sm"
              >
                <div className="flex">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#febc11] text-[#febc11]" />
                  ))}
                </div>
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Property Type */}
      <div>
        <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#3f2c77] text-base mb-4">
          Property Type
        </h3>
        <div className="space-y-2">
          {propertyTypes.map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                id={`type-${type}`}
                checked={selectedTypes.includes(type)}
                onCheckedChange={() => toggleType(type)}
                data-testid={`checkbox-type-${type.toLowerCase().replace(/\s+/g, '-')}`}
              />
              <Label
                htmlFor={`type-${type}`}
                className="cursor-pointer [font-family:'Inter',Helvetica] text-sm"
              >
                {type}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div>
        <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#3f2c77] text-base mb-4">
          Amenities
        </h3>
        <div className="space-y-2 max-h-[300px] overflow-y-auto">
          {amenities.map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox
                id={`amenity-${amenity}`}
                checked={selectedAmenities.includes(amenity)}
                onCheckedChange={() => toggleAmenity(amenity)}
                data-testid={`checkbox-amenity-${amenity.toLowerCase().replace(/\s+/g, '-')}`}
              />
              <Label
                htmlFor={`amenity-${amenity}`}
                className="cursor-pointer [font-family:'Inter',Helvetica] text-sm"
              >
                {amenity}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <Button
        variant="outline"
        className="w-full border-[#3f2c77] text-[#3f2c77] hover:bg-[#3f2c77] hover:text-white"
        onClick={clearFilters}
        data-testid="button-clear-filters"
      >
        Clear All Filters
      </Button>
    </div>
  );
}
