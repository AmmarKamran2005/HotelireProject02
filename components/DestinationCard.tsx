import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Destination } from "@/types";

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-none bg-transparent cursor-pointer transition-all duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:-translate-y-[2px]">
      <CardContent className="p-0">
        <div className="relative w-full h-[180px] md:h-[200px] lg:h-[218px] rounded-lg overflow-hidden">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover transition-transform duration-300" // removed group-hover scale
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        <div className="mt-4">
          <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#3554d1] text-lg md:text-xl mb-2 transition-colors duration-200 hover:text-[#2a3fa8]">
            {destination.name}
          </h3>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-[#3f2c77] text-sm">
            {destination.properties}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
