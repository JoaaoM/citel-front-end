import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search} from 'lucide-react'
import { useState } from 'react';
import { Importacao } from '../../types/types'


type Props = {
    data: Importacao[],
    setListaFiltrada: React.Dispatch<React.SetStateAction<Importacao[]>>
}
  
export default function FiltragemListaImportacao({data, setListaFiltrada}:Props){

    const [filtro, setFiltro] = useState('');

    const handleFiltrar = () => {
        const novaLista = data.filter(d => d.nomeArquivo.toUpperCase().includes(filtro.toUpperCase()));
        setListaFiltrada(novaLista);
    }

    return (
        <>
        <Input name='nome' placeholder='Nome da importação' onChange={(event) => setFiltro(event.target.value)}/>
          
          <Button type='button' variant="link" onClick={handleFiltrar}>
              <Search className='w-4 h-4 mr-2'/>
              Filtrar resultados
          </Button>
        </>
    )

}