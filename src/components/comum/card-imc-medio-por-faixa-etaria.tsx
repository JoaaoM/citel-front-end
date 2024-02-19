import { BASE_URL, OBTER_IMC_MEDIO_POR_FAIXA_ETARIA } from "@/apis/apis";
import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios'
import { Skeleton } from "../ui/skeleton";
import { useParams } from "react-router-dom";

interface Dado {
    faixa: string;
    imc: number;
}
export default function CardImcMedioPorFaixaEtaria () {

    const [dados, setDados] = useState<Dado[]>([]);
    const [loading, setLoading] = useState(false)

    const { id } = useParams();

    const handleDadosChange = async () => {
        setLoading(true)
        const response = await axios.get(`${BASE_URL}${OBTER_IMC_MEDIO_POR_FAIXA_ETARIA}${id}`);
        const dadosOrdenados = ordenarPorFaixaEtaria(response.data);
        setDados(dadosOrdenados);
        setLoading(false)
    }

    function ordenarPorFaixaEtaria(lista: Dado[]): Dado[] {
        return lista.sort((a, b) => {
            const faixaA = parseInt(a.faixa.split('-')[0]);
            const faixaB = parseInt(b.faixa.split('-')[0]);
            
            return faixaA - faixaB;
        });
    }
   
    useEffect(() => {
        handleDadosChange();
    }, [])
    
    return (
    <>
        {!loading && 
        <Card className='w-full'>
        <CardHeader>
            <CardTitle>Média do IMC por faixa etaria</CardTitle>
            <CardDescription>IMC médio em cada faixa de idade de dez em dez anos</CardDescription>
        </CardHeader>
        <CardContent className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={dados}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="faixa" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="imc" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
        </CardContent>
        </Card>
        }
        {loading && <Skeleton className="w-full h-[491.33px]"/>}

    </>
    )
}