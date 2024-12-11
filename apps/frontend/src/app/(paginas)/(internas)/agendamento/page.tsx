import Link from "next/link";


export default function page() {
   return (
    <div className=" flex flex-col gap-5 justify-center items-center">
      <span className="text-5xl">Agendamento</span>
      <Link href="/" className="button">
      Voltar
      </Link>
    </div>
  )
}