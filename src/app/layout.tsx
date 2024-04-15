import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";

import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/navbar";
import {Link, Button, CircularProgress, Card, CardBody, CardFooter, Chip} from "@nextui-org/react";
import Image from "next/image";
import { redirect } from "next/dist/server/api-utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RayenCO2",
  description: "Generated by create next app",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  
  return (
    <html lang="es" className='dark'>
      <head>
        <link rel="shortcut icon" href="./img/logo.png" />
      </head>
      <body>
      <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <a href="#inicio"><Image
          src="/img/logo.png"
          height={40}
          width={40} 
          alt="RayenCO2"
          /></a>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#objetivo" className=" text-white">
            Objetivo
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#mapa" className=" text-white">
            Mapa
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#nosotros" className=" text-white">
            Nosotros
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} href="#" variant="solid" className=" bg-green-500">
            Unirse
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}