import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  return (
    <header className="w-full bg-[#3f2c77] h-12 flex items-center justify-between px-4 md:px-8 lg:px-[203px]">
      <div className="flex items-center gap-4">
     
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#febc11] transition-colors duration-200"
            aria-label="Facebook"
            data-testid="link-facebook"
          >
            <FaFacebookF size={14} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#febc11] transition-colors duration-200"
            aria-label="Twitter"
            data-testid="link-twitter"
          >
            <FaTwitter size={14} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#febc11] transition-colors duration-200"
            aria-label="Instagram"
            data-testid="link-instagram"
          >
            <FaInstagram size={14} />
          </a>
        </div>
      </div>
      <a
        href="mailto:info@hotelire.ca"
        className="text-white text-xs flex items-center justify-between [font-family:'Poppins',Helvetica] font-normal hidden md:block hover:text-[#febc11] transition-colors duration-200"
      >
        info@hotelire.ca
      </a>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
      <button
        className="flex items-center gap-2 cursor-pointer bg-transparent border-none outline-none"
        aria-label="User menu"
      >
        <Image
          src="/figmaAssets/login.png"
          alt="User avatar"
          width={32}
          height={32}
          className="w-6 h-6 rounded-full"
        />
        <span className="text-[#febc11] text-[13px] [font-family:'Poppins',Helvetica] font-bold hidden sm:block">
          <Link
            href="./customer/signin"
            prefetch={false}
            className="[font-family:'Poppins',Helvetica] font-medium text-[#FFFFFF] text-[12px] leading-[30px] cursor-pointer w-full"
          > 
            Muhammad Talha  
          </Link> 
        </span>
      </button>
      </DropdownMenuTrigger> 
     <DropdownMenuContent className="w-[131px] bg-[#f5f6fdf0] rounded-[0px_0px_4px_4px] p-4 shadow-md">
          <DropdownMenuItem asChild>
            <Link
              href="/admin or owner" //go to respective panels
              prefetch={false}
              className="[font-family:'Poppins',Helvetica] font-medium text-[#3f2c77] text-[11px] leading-[30px] cursor-pointer w-full"
            >
              Admin Panel
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              href="/profile
              "
              prefetch={false}
              className="[font-family:'Poppins',Helvetica] font-medium text-[#3f2c77] text-[11px] leading-[30px] cursor-pointer w-full"
            >
              My Profile
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
