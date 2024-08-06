"use client"

import { usePathname } from "next/navigation";
import MainNavLi from "./MainNavLi";

function MainNav() {
  const actualPath = usePathname();

  return ( 
    <ul className="flex gap-8 font-semibold">
      <MainNavLi actualPath={actualPath} link="/esportes" text="Esportes" />
      <MainNavLi actualPath={actualPath} link="/eventos" text="Eventos" />
      <MainNavLi actualPath={actualPath} link="/treinar" text="Treinar" />
    </ul>
   );
}

export default MainNav;