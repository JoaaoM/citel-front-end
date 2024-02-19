import { BASE_URL, OBTER_DOADORES_POR_RECEPTOR } from "@/apis/apis";
import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios'
import { Skeleton } from "../ui/skeleton";
import { useParams } from "react-router-dom";


export default function CardDoadoresPorReceptor () {

    const [dados, setDados] = useState([]);
    const [loading, setLoading] = useState(false)

    const { id } = useParams();

    const handleDadosChange = async () => {
        setLoading(true)
        const response = await axios.get(`${BASE_URL}${OBTER_DOADORES_POR_RECEPTOR}${id}`);
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
            <CardTitle>Quantidade de doadores para cada tipo de sangue</CardTitle>
            <CardDescription>A quantidade de possíveis doadores para cada tipo sanguíneo receptor.</CardDescription>
        </CardHeader>
        <CardContent className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
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
            <XAxis dataKey="sorotipagem" interval={0}/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="quantidade" fill="#e11d48" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            </BarChart>
        </ResponsiveContainer>
        </CardContent>
        </Card>
        }
        {loading && <Skeleton className="w-full h-[491.33px]"/>}

    </>
    )
}