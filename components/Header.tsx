import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  return (
    <header className="w-full bg-[#3f2c77] h-12 flex items-center justify-between px-4 md:px-8 lg:px-[103px]">
      <Link href="/">
        <Image
          src="/figmaAssets/screenshot-2025-08-22-at-1-02-21-pm-1.png"
          alt="Hotel Logo"
          width={111}
          height={37}
          className="w-[80px] h-[27px] md:w-[111px] md:h-[37px] bg-blend-multiply object-cover"
        />
      </Link>
      <a
        href="mailto:info@hotelire.ca"
        className="text-white text-xs [font-family:'Poppins',Helvetica] font-normal hidden md:block hover:text-[#febc11] transition-colors duration-200"
      >
        info@hotelire.ca
      </a>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 cursor-pointer bg-transparent border-none outline-none" aria-label="User menu">
            <Image
              src="/figmaAssets/image.png"
              alt="User avatar"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-[#febc11] text-[13px] [font-family:'Poppins',Helvetica] font-bold hidden sm:block">
              Allison
            </span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[131px] bg-[#f5f6fdf0] rounded-[0px_0px_4px_4px] p-4 shadow-md">
          <DropdownMenuItem asChild>
            <Link href="/account" prefetch={false} className="[font-family:'Poppins',Helvetica] font-medium text-[#3f2c77] text-[11px] leading-[30px] cursor-pointer w-full">
              My Account
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/trips" prefetch={false} className="[font-family:'Poppins',Helvetica] font-medium text-[#3f2c77] text-[11px] leading-[30px] cursor-pointer w-full">
              My Trips
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <button className="[font-family:'Poppins',Helvetica] font-medium text-[#3f2c77] text-[11px] leading-[30px] cursor-pointer w-full text-left">
              Logout
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
