import { Table, TableCaption, TableHead, TableHeader, TableRow, TableBody, TableCell } from '@/components/ui/table'
import { FileBarChart2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Importacao } from '../../types/types'
import { Link } from 'react-router-dom'

type Props = {
    listaFiltrada: Importacao[],
}

export default function TabelaImportacao({ listaFiltrada}:Props) {

    console.log(listaFiltrada);
    return (
    <Table>
        <TableCaption>Lista das suas importações</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead>ID</TableHead>
            <TableHead className='min-w-[100px]'>Nome</TableHead>
            <TableHead>Data de Importação</TableHead>
            <TableHead>Visualizar</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
          
        {listaFiltrada && listaFiltrada.map(lista => (
            <TableRow key={lista.id}>
            <TableCell>{lista.id}</TableCell>
            <TableCell>{lista.nomeArquivo}</TableCell>
            <TableCell>{lista.dataImportacao}</TableCell>
            <TableCell><Button variant='ghost'><Link to={"/dashboard/"+lista.id}><FileBarChart2 className='w-6 h-6 mr-2'/></Link></Button></TableCell>
            </TableRow>
        ))}
        </TableBody>
      </Table>)
}