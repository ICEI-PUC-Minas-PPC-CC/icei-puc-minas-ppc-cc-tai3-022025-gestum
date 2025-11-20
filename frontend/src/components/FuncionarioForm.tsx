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

const funcionarioSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório").max(50),
  email: z.string().email("Email inválido").max(50),
  contato: z.string().length(11, "Contato deve ter 11 dígitos (DDD + número)"),
  empresa: z.string().min(1, "Empresa é obrigatória"),
  descricao: z.string().optional(),
});

type FuncionarioFormValues = z.infer<typeof funcionarioSchema>;

interface FuncionarioFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FuncionarioForm({ open, onOpenChange }: FuncionarioFormProps) {
  const { toast } = useToast();
  const form = useForm<FuncionarioFormValues>({
    resolver: zodResolver(funcionarioSchema),
    defaultValues: {
      nome: "",
      email: "",
      contato: "",
      empresa: "",
      descricao: "",
    },
  });

  const onSubmit = async (data: FuncionarioFormValues) => {
    try {
      const response = await api.post("/funcionarios", data);
      console.log("Funcionário criado:", response.data);
      toast({
        title: "Funcionário adicionado!",
        description: "O funcionário foi criado com sucesso.",
      });
      form.reset();
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Erro ao criar funcionário!",
        description: "Ocorreu um erro ao criar o funcionário.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Novo Funcionário</DialogTitle>
          <DialogDescription>
            Cadastre um novo funcionário no sistema
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
                    <Input placeholder="Carlos Souza" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email"
                      placeholder="carlos@empresa.com" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contato"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contato (Celular)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="11987654321" 
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
                      placeholder="Informações adicionais sobre o funcionário..."
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
              <Button type="submit">Cadastrar Funcionário</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
