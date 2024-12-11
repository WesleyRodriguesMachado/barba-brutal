import { ProvedorSessao } from "../../data/contexts/ContextoSessao";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Layout(props: any) {
  return <ProvedorSessao>{props.children}</ProvedorSessao>;
}
