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
    </div>
    </div>
    </>)
}