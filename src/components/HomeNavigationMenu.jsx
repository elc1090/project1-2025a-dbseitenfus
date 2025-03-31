"use client"

import * as React from "react"
import Link from "next/link"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

const menuItems = [
  { label: "MONTE SEU PC", href: "/docs" },
  { label: "CUPONS", href: "/docs" },
  { label: "FRETE GRÁTIS", href: "/docs" },
  { label: "HARDWARE", href: "/docs" },
  { label: "PC GAMER", href: "/docs" },
  { label: "COMPUTADORES", href: "/docs" },
  { label: "PERIFÉRICOS", href: "/docs" },
  { label: "ESCRITÓRIO", href: "/docs" },
  { label: "VENDA NO KABUM", href: "/docs" },
];

const menuItemClass = `${navigationMenuTriggerStyle()} bg-orange-weak hover:bg-orange-strong hover:text-white text-white font-bold`;

export default function HomeNavigationMenu() {
  return (
    <NavigationMenu className="w-full bg-orange-weak flex max-w-none">
      <NavigationMenuList className="w-full flex justify-between">
        <NavigationMenuItem>
          <NavigationMenuTrigger className={menuItemClass}>
            DEPARTAMENTOS
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {menuItems.map(({ label, href }) => (
          <NavigationMenuItem key={label}>
            <Link href={href} legacyBehavior passHref>
              <NavigationMenuLink className={menuItemClass}>{label}</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}