import { useEffect, useState } from 'react'
import FiltragemListaImportacao from '@/components/comum/filtragem-lista-importacao'
import DialogAdicionarImportacao from '@/components/comum/dialog-adicionar-importacao'
import TabelaImportacao from '@/components/comum/tabela-importacao'

export type Importacao = {
  id: number,
  nomeArquivo: string,
  dataImportacao: string
}

export default function PageUpload() {

  const [dados, setDados] = useState<Importacao[]>([]);
  const [listaFiltrada, setListaFiltrada] = useState<Importacao[]>([]);

  async function handleFetch() {
    const response = await fetch("http://localhost:8080/api/importacao");
    const json = await response.json();
    
    setDados(json);
  }

  useEffect(() => {
    handleFetch();
  },[])

  useEffect(() => {
    setListaFiltrada(dados)
  }, [dados])

  return ( <>
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <h2 className="text-3xl font-bold">
      Importações
      </h2>
      <div className='flex items-center justify-between'>
        
        <FiltragemListaImportacao data={dados} setListaFiltrada={setListaFiltrada}/>
        <DialogAdicionarImportacao setDados={setDados}/>
        
      </div>

      <div className='border rounded-lg p-2 w-full'>
        <TabelaImportacao listaFiltrada = {listaFiltrada} />
      </div>
    </div>
  </>)
}

