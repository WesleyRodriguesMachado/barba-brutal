'use client'
import Image from "next/image";
import Logo from "./Logo";

export default function Processando() {
   return ( 
   
       <div className=" h-screen">
            <Image src="/banners/principal.webp" fill alt="Banner" />
      
            <div className=" flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full bg-black/80 gap-10">
      
              <Logo />

              <span className="font-light text-zinc-400">Processando...</span>
        
    </div> 

    </div>
  )
}