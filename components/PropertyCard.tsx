import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Property } from "@/types";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/properties/${property.id}`} prefetch={false}>
      <Card className="overflow-hidden border-0 shadow-none bg-transparent cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group">
        <CardContent className="p-0 flex flex-col h-full">
          <div className="relative w-full h-[250px] md:h-[280px] lg:h-[308px] rounded-[5px] overflow-hidden">
            <Image
              src={property.image}
              alt={property.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
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
                <div className="relative w-[96.5px] h-[15.55px]">
                  <Image
                    src={property.stars}
                    alt={`${property.rating} stars`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="[font-family:'Inter',Helvetica] font-medium text-[#3f2c77] text-xs md:text-sm">
                  {property.reviews}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
