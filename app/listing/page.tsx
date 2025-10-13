"use client";

import { useState } from "react";
import Image from "next/image";
import { SlidersHorizontal, MapPin, Grid, Map } from "lucide-react";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ListingCard } from "@/components/ListingCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { listings } from "@/lib/data";

export default function ListingPage() {
  const [sortBy, setSortBy] = useState("recommended");
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(listings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentListings = listings.slice(startIndex, endIndex);

  return (
    <div className="bg-white w-full flex flex-col min-h-screen">
      <Header />
      <Navigation />

      {/* Search Section */}
      <section className="w-full bg-[#f5f6fd] py-6 md:py-8 px-4 md:px-8 lg:px-[103px]">
        <SearchBar />
      </section>

      {/* Results Section */}
      <section className="flex-1 w-full px-4 md:px-8 lg:px-[103px] py-6 md:py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block w-[280px] flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header with Sort and View Toggle */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="[font-family:'Poppins',Helvetica] font-bold text-[#3f2c77] text-xl md:text-2xl mb-2">
                  Hotels in Ontario
                </h1>
                <p className="[font-family:'Inter',Helvetica] font-medium text-gray-600 text-sm md:text-base">
                  {listings.length} properties found
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {/* Mobile Filter Button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      className="lg:hidden flex items-center gap-2 flex-1 sm:flex-initial"
                      data-testid="button-mobile-filters"
                    >
                      <SlidersHorizontal className="w-4 h-4" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle className="[font-family:'Poppins',Helvetica] font-bold text-[#3f2c77]">
                        Filters
                      </SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterSidebar />
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Sort Dropdown */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-[180px]" data-testid="select-sort">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Rating: High to Low</SelectItem>
                    <SelectItem value="stars">Star Rating</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Toggle */}
                <div className="hidden sm:flex items-center gap-1 border border-gray-300 rounded-md p-1">
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    className={`px-3 ${viewMode === "list" ? "bg-[#3f2c77] hover:bg-[#2a2158]" : ""}`}
                    onClick={() => setViewMode("list")}
                    data-testid="button-view-list"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "map" ? "default" : "ghost"}
                    size="sm"
                    className={`px-3 ${viewMode === "map" ? "bg-[#3f2c77] hover:bg-[#2a2158]" : ""}`}
                    onClick={() => setViewMode("map")}
                    data-testid="button-view-map"
                  >
                    <Map className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Listings */}
            <div className="space-y-4">
              {currentListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  data-testid="button-prev-page"
                >
                  Previous
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    className={currentPage === page ? "bg-[#3f2c77] hover:bg-[#2a2158]" : ""}
                    onClick={() => setCurrentPage(page)}
                    data-testid={`button-page-${page}`}
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  data-testid="button-next-page"
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
