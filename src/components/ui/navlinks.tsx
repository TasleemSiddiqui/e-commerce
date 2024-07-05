"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { getCategory } from "@/lib/data";
import { Icategory } from "@/lib/types";
import { useEffect, useState } from "react";
import { currentUser } from "@clerk/nextjs/server";
import { useUser } from "@clerk/clerk-react";


export function NavbarMenu() {
  const { isSignedIn, user, isLoaded } = useUser();
 
  
  const [components, setComponents] = useState<Icategory[] | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
      
        const categories: Icategory[] = await getCategory(); 
        setComponents(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategory();
  }, []); 

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} text-myNavy  hover:text-myPink`}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-gray-100 ">
              {components &&
                components.map((item, i) => (
                  <Link href={`/${item.categorySlug.current}`} key={i}>
                    <ListItem>
                      <h3 className=" group-hover:text-myPink">
                        {item.categoryName}
                      </h3>
                      <p className="text-[12px] line-clamp-2 group-hover:text-gray-600/70">
                        {item.categoryDescription}
                      </p>
                    </ListItem>
                  </Link>
                ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} text-myNavy  hover:text-myPink`}
            >
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} text-myNavy  hover:text-myPink`}
            >
              Contact{" "}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        { isSignedIn &&
           <NavigationMenuItem>
           <Link href="/dashboard" legacyBehavior passHref>
             <NavigationMenuLink
               className={`${navigationMenuTriggerStyle()} text-myNavy  hover:text-myPink`}
             >
               Dashboard{" "}
             </NavigationMenuLink>
           </Link>
         </NavigationMenuItem>
          
        }
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            " text-myNavy group hover:text-myPink block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none group-hover:text-myPink">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-gray-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
