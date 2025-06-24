import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const Navbar = () => {
  return (
    <div className="w-full bg-yellow-700 text-white h-16 flex items-center">
      <div className="w-[80%] mx-auto flex items-center justify-between">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-row items-center gap-4">
            <NavigationMenuItem>
              <Link href="/">Home</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/portfolio">Portfolio</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/about" className="flex flex-row items-center gap-2">
                <Avatar className="w-8 h-8 rounded-full overflow-hidden">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="flex items-center justify-center h-full w-full text-xs font-semibold bg-white text-yellow-700">
                    MF
                  </AvatarFallback>
                </Avatar>
                <span className="text-white">Muhammad Faisal</span>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
