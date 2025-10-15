import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="w-full bg-white min-h-[80px] lg:h-[111px] flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-[103px] py-4 lg:py-0 gap-4 lg:gap-0">
      <Link href="/">
        <Image
          src="/figmaAssets/group-370.png"
          alt="Hotelire"
          width={141}
          height={94}
          className="w-[100px] h-[66px] lg:w-[141px] lg:h-[94px]"
        />
      </Link>

      <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-12 [font-family:'Inter',Helvetica] font-bold text-black text-[15px] lg:text-[17px]">
        <Link
          href="/"
          prefetch={false}
          className="flex items-center gap-2 cursor-pointer hover:text-[#3f2c77] transition-colors duration-200"
        >
          <span>HOME</span>
          <ChevronDownIcon className="w-[13px] h-2" aria-hidden="true" />
        </Link>
        <Link
          href="/destinations"
          prefetch={false}
          className="flex items-center gap-2 cursor-pointer hover:text-[#3f2c77] transition-colors duration-200"
        >
          <span>DESTINATIONS</span>
          <ChevronDownIcon className="w-[13px] h-2" aria-hidden="true" />
        </Link>
        <Link
          href="/listing"
          prefetch={false}
          className="cursor-pointer hover:text-[#3f2c77] transition-colors duration-200"
        >
          SEARCH
        </Link>
        <Link
          href="/blog"
          prefetch={false}
          className="cursor-pointer hover:text-[#3f2c77] transition-colors duration-200"
        >
          BLOG
        </Link>
        <Link
          href="/contact"
          prefetch={false}
          className="cursor-pointer hover:text-[#3f2c77] transition-colors duration-200"
        >
          CONTACT
        </Link>
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
  );
}
