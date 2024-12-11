/* eslint-disable @typescript-eslint/no-explicit-any */

//import Image from "next/image";
export interface ItemClientelProps {
  nome: string;
  testemunho: string;
}

export default function ItemServico(props: ItemClientelProps) {
  const { nome, testemunho } = props;
  return (
    <div className="">
      <p className="font-bold text-4xl text-white">{nome}</p>
      <p className="my-4 text-zinc-300">{testemunho}</p>
    </div>
  );
}
