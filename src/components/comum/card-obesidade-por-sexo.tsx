import { BASE_URL, OBTER_OBESIDADE_POR_SEXO } from "@/apis/apis";
import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from '@/components/ui/table'
import axios from 'axios'
import { Skeleton } from "../ui/skeleton";
import { useParams } from "react-router-dom";

type Dados = {
    sexo: string,
    populacaoTotal:number,
    populacaoObesa:number,
    percentual:number;
}

export default function CardObesidadePorSexo () {

    const [dados, setDados] = useState<Dados[]>([]);
    const [loading, setLoading] = useState(false)

    const { id } = useParams();

    const handleDadosChange = async () => {
        setLoading(true)
        const response = await axios.get(`${BASE_URL}${OBTER_OBESIDADE_POR_SEXO}${id}`);
        setDados(response.data);
        setLoading(false)
    }

    useEffect(() => {
        handleDadosChange();
    }, [])
    
    return (
    <>
        {!loading && 
        <Card className='w-full'>
        <CardHeader>
            <CardTitle>Obesidade entre homens e mulheres</CardTitle>
            <CardDescription>Esta tabela exibe a distribuição de obsesos entre homens e mulheres com imc maior que 30.</CardDescription>
        </CardHeader>
        <CardContent>
        <Table>
        <TableHeader>
            <TableRow>
            <TableHead>Sexo</TableHead>
            <TableHead className='min-w-[100px]'>Populacao Total</TableHead>
            <TableHead>Populacao Obesa</TableHead>
            <TableHead>Percentual</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
          
        {dados && dados.map((dado, index) => (
            <TableRow key={index}>
            <TableCell>{dado.sexo}</TableCell>
            <TableCell>{dado.populacaoTotal}</TableCell>
            <TableCell>{dado.populacaoObesa}</TableCell>
            <TableCell>{dado.percentual.toFixed(2)}%</TableCell>
            </TableRow>
        ))}
        </TableBody>
      </Table>
        </CardContent>
        </Card>
        }
        {loading && <Skeleton className="w-full h-[491.33px]"/>}

    </>
    )
}