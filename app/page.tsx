import BrasilText from "@/components/decoration/BrasilText";
import Noticias from "@/components/home/Noticias";
import { Medal, Trophy } from "lucide-react";

export default function Home() {
  
  return (
    <>
      <Noticias />

      <section className="bg-black">
        <h2 className="font-anton text-5xl tracking-[0.04em] flex gap-5 justify-center items-center"><Trophy className="h-12 w-12"/> Acompanhe o <span className="ml-[-24px]"></span><BrasilText letters="Esporte Brasileiro" /> <Medal className="ml-[-4px] h-12 w-12"/></h2>
        { /* Seção de display dos esportes
          -> selecao de esporte
          -> cards do esporte
          -> secao de atletas
        */ }
      </section>
    </>
  );
}
