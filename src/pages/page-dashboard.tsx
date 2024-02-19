import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom'
import CardPessoaPorEstado from '@/components/comum/card-pessoa-por-estado';
import CardImcMedioPorFaixaEtaria from '@/components/comum/card-imc-medio-por-faixa-etaria';
import CardDoadoresPorReceptor from '@/components/comum/card-doadores-por-receptor';
import CardObesidadePorSexo from '@/components/comum/card-obesidade-por-sexo';
import CardMediaIdadeParaCadaTipoSanguineo from '@/components/comum/card-media-idade-para-cada-tipo-sanguineo'

export default function PageDashboard(){

    return (
    <>
      <div className="max-w-7xl mx-auto p-6 space-y-4">
      <div className="flex items-center">
        <Button variant='ghost' className="flex items-center gap-3">
            <Link to="/upload" className="flex items-center gap-3">
            <ArrowLeft />
            Voltar
            </Link>
        </Button>
  <h2 className="text-3xl font-bold ml-4">Dashboard</h2>
</div>
    
    <div className='flex gap-6 flex-wrap'>
    
    <CardPessoaPorEstado/>
    <CardImcMedioPorFaixaEtaria/>
    <CardDoadoresPorReceptor/>
    <CardObesidadePorSexo />
    <CardMediaIdadeParaCadaTipoSanguineo/>

    {/* <Card className='w-min h-min'>
      <CardHeader>
        <CardTitle>Pessoa por Estado</CardTitle>
        <CardDescription>Este gráfico exibe a distribuição da quantidade de pessoas por estado.</CardDescription>
      </CardHeader>
      <CardContent className="w-[350px] h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
      </CardContent>
    </Card>

    <Card className='w-min h-min'>
      <CardHeader>
        <CardTitle>Pessoa por Estado</CardTitle>
        <CardDescription>Este gráfico exibe a distribuição da quantidade de pessoas por estado.</CardDescription>
      </CardHeader>
      <CardContent className="w-[350px] h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
      </CardContent>
    </Card>

    <Card className='w-min h-min'>
      <CardHeader>
        <CardTitle>Pessoa por Estado</CardTitle>
        <CardDescription>Este gráfico exibe a distribuição da quantidade de pessoas por estado.</CardDescription>
      </CardHeader>
      <CardContent className="w-[350px] h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
      </CardContent>
    </Card>
          
    <Card className='w-min h-min'>
      <CardHeader>
        <CardTitle>Pessoa por Estado</CardTitle>
        <CardDescription>Este gráfico exibe a distribuição da quantidade de pessoas por estado.</CardDescription>
      </CardHeader>
      <CardContent className="w-[350px] h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
      </CardContent>
    </Card>

    <Card className='w-min h-min'>
      <CardHeader>
        <CardTitle>Pessoa por Estado</CardTitle>
        <CardDescription>Este gráfico exibe a distribuição da quantidade de pessoas por estado.</CardDescription>
      </CardHeader>
      <CardContent className="w-[350px] h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
      </CardContent>
    </Card> */}
    </div>
    </div>
    </>)
}