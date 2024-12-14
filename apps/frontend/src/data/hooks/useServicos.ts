'use client'
import { servicos } from "@barbabrutal/core";
//esse codigo comentado pega os dados da api direto do banco de dados e nao das constants
// import useApi from "./useApi";
// import { useCallback, useEffect, useState } from "react";

export default function useServicos() {

    // const {httpGet} = useApi()
    // const [servicos, setServicos] = useState<Servico[]>([])

    // const  carregarServicos = useCallback(
    //         async function() {
    //         const servicos = await httpGet('servicos')
    //         setServicos(servicos)
    // }, [httpGet])

    // useEffect(()=> {
    //     carregarServicos()
    // },[carregarServicos])


   return {
    servicos
}
}