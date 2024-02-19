import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { PlusCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { DialogClose } from '@radix-ui/react-dialog'
import { useToast } from '../ui/use-toast'
import { useState, ChangeEvent, FormEvent} from 'react'
import { BASE_URL, UPLOAD } from '@/apis/apis'
import { Importacao } from '../../types/types'
import { LoadingSpinner } from './loading-spinner'
import axios from 'axios';

type Props = {
  setDados: React.Dispatch<React.SetStateAction<Importacao[]>>
}

export default function DialogAdicionarImportacao ({setDados}:Props){

    const [file, setFile] = useState<File | null>(null);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false)

    const { toast } = useToast();

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0];
      if (selectedFile) {
        setFile(selectedFile);
      } else {
        setFile(null);
      }
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!file){
          toast({
            title: 'Você precisa adicionar um arquivo',
            description: "Adicione um arquivo .json para fazer a importação"
          })

          return;
        }
        
        try{
          setLoading(true)
          const formData = new FormData();
          formData.append('jsonFile',file);

           await axios.post(`${BASE_URL}${UPLOAD}`, formData, {
            headers: {'Content-Type': 'multipart/form-data'}
          });
          
          setLoading(false)
          const dados = await axios.get(`${BASE_URL}${UPLOAD}`)

          setDados(dados.data)
          
          setOpen(false);

          toast({
            title: 'Sucesso!',
            description: "Arquivo importado com sucesso!"
          })
          
        } catch(error){
          console.error('Erro ao enviar arquivo', error)
          alert('Erro ao enviar arquivo');
        }
    }

    return (
    <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className='w-4 h-4 mr-2'/>
              Nova Importacao
            </Button>
          </DialogTrigger>
          
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nova Importacação</DialogTitle>
              <DialogDescription>Criar uma nova importação de pessoas no sistema.</DialogDescription>
            </DialogHeader>

            <form className='space-y-6' onSubmit={handleSubmit}>
              <div className='grid w-full max-w-sm items-center gap-1.5'>
                  <Input type='file' accept='.json' onChange={handleFileChange}/>
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button type='button' variant='outline' disabled={loading}>Cancelar</Button>
                </DialogClose>
                <Button type='submit'  disabled={loading} className='flex gap-2'><LoadingSpinner show={loading}/>Salvar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>)
}