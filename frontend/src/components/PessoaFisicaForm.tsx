import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import api from "@/lib/api";

const pessoaFisicaSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório").max(50),
  cpf: z.string().length(11, "CPF deve ter 11 dígitos"),
  empresa: z.string().min(1, "Empresa é obrigatória"),
  descricao: z.string().optional(),
});

type PessoaFisicaFormValues = z.infer<typeof pessoaFisicaSchema>;

interface PessoaFisicaFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PessoaFisicaForm({ open, onOpenChange }: PessoaFisicaFormProps) {
  const { toast } = useToast();
  const form = useForm<PessoaFisicaFormValues>({
    resolver: zodResolver(pessoaFisicaSchema),
    defaultValues: {
      nome: "",
      cpf: "",
      empresa: "",
      descricao: "",
    },
  });

  const onSubmit = async (data: PessoaFisicaFormValues) => {
    try {
      const response = await api.post("/pessoas-fisicas", data);
      console.log("Pessoa física criada:", response.data);
      toast({
        title: "Pessoa física adicionada!",
        description: "A pessoa física foi criada com sucesso.",
      });
      form.reset();
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Erro ao criar pessoa física!",
        description: "Ocorreu um erro ao criar a pessoa física.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Nova Pessoa Física</DialogTitle>
          <DialogDescription>
            Cadastre uma nova pessoa física no sistema
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome Completo</FormLabel>
                  <FormControl>
                    <Input placeholder="João Silva" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="12345678901" 
                      maxLength={11}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="empresa"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Empresa</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a empresa" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="tech-solutions">Tech Solutions</SelectItem>
                      <SelectItem value="abc-industries">ABC Industries</SelectItem>
                      <SelectItem value="xyz-consulting">XYZ Consulting</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="descricao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Informações adicionais..."
                      className="resize-none"
                      rows={3}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancelar
              </Button>
              <Button type="submit">Cadastrar Pessoa</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
