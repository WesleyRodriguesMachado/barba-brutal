import Image from "next/image";

export interface SecaoBackgroundProps {
  children: React.ReactNode;
  imagem: string;
}

export default function SecaoBackground(props: SecaoBackgroundProps) {
  return (
    <div className="relative">
      <Image
        src={props.imagem}
        alt="imagem de fundo"
        fill
        className="object-cover -z-30"
      />
      <div className=" bg-black/80 sm:bg-transparent sm:bg-gradient-to-r from-black/80 via-black/95 to-black/80">
        <div className="container py-10">{props.children}</div>
      </div>
    </div>
  );
}
