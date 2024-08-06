import Link from "next/link";
import { Github } from "lucide-react";

function Footer() {
  return ( 
    <footer className="bg-black">
        <h2 className="flex justify-center font-bold text-xl p-10"><Link className="flex gap-2 baseHover" href="https://github.com/jv-aquino/jornada-olimpica?tab=readme-ov-file#jornada-ol%C3%ADmpica">Ajude a desenvolver esse projeto <Github className="h-7" /></Link></h2>
    </footer>
   );
}

export default Footer;