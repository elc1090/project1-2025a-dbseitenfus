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


export default function HomeNavigationMenu() {
  return (
    <NavigationMenu className="w-full bg-[#ff6401] flex max-w-none">
  <NavigationMenuList className="w-full flex justify-between">
    <NavigationMenuItem >
      <NavigationMenuTrigger className="bg-[#ff6401] hover:bg-[#e35214] hover:text-white text-white font-bold">DEPARTAMENTOS</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-[#ff6401] hover:bg-[#e35214] hover:text-white text-white font-bold`}>
              MONTE SEU PC
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
    <NavigationMenuItem>
        <Link href="/docs" legacyBehavior passHref>
        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-[#ff6401] hover:bg-[#e35214] hover:text-white text-white font-bold`}>
        CUPONS
        </NavigationMenuLink>
        </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
        <Link href="/docs" legacyBehavior passHref>
        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-[#ff6401] hover:bg-[#e35214] hover:text-white text-white font-bold`}>
        FRETE GRÁTIS
        </NavigationMenuLink>
        </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
        <Link href="/docs" legacyBehavior passHref>
        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-[#ff6401] hover:bg-[#e35214] hover:text-white text-white font-bold`}>
        HARDWARE
        </NavigationMenuLink>
        </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
        <Link href="/docs" legacyBehavior passHref>
        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-[#ff6401] hover:bg-[#e35214] hover:text-white text-white font-bold`}>
        PC GAMER
        </NavigationMenuLink>
        </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
        <Link href="/docs" legacyBehavior passHref>
        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-[#ff6401] hover:bg-[#e35214] hover:text-white text-white font-bold`}>
        COMPUTADORES
        </NavigationMenuLink>
        </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
        <Link href="/docs" legacyBehavior passHref>
        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-[#ff6401] hover:bg-[#e35214] hover:text-white text-white font-bold`}>
        PERIFÉRICOS
        </NavigationMenuLink>
        </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
        <Link href="/docs" legacyBehavior passHref>
        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-[#ff6401] hover:bg-[#e35214] hover:text-white text-white font-bold`}>
        ESCRITÓRIO
        </NavigationMenuLink>
        </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
        <Link href="/docs" legacyBehavior passHref>
        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-[#ff6401] hover:bg-[#e35214] hover:text-white text-white font-bold`}>
        VENDA NO KABUM
        </NavigationMenuLink>
        </Link>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

  )
}

