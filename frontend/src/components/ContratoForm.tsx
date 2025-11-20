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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import api from "@/lib/api";

const contratoSchema = z.object({
  titulo: z.string().min(5, "Título deve ter no mínimo 5 caracteres"),
  pessoa: z.string().min(3, "Nome da pessoa é obrigatório"),
  tipoPessoa: z.enum(["fisica", "juridica"]),
  dataInicio: z.string().min(1, "Data de início é obrigatória"),
  dataFim: z.string().min(1, "Data de fim é obrigatória"),
  valor: z.string().min(1, "Valor é obrigatório"),
  status: z.enum(["ativo", "vencido", "analise", "pendente"]),
  responsavel: z.string().min(3, "Responsável é obrigatório"),
  descricao: z.string().optional(),
});

type ContratoFormValues = z.infer<typeof contratoSchema>;

interface ContratoFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContratoForm({ open, onOpenChange }: ContratoFormProps) {
  const form = useForm<ContratoFormValues>({
    resolver: zodResolver(contratoSchema),
    defaultValues: {
      titulo: "",
      pessoa: "",
      tipoPessoa: "juridica",
      dataInicio: "",
      dataFim: "",
      valor: "",
      status: "pendente",
      responsavel: "",
      descricao: "",
    },
  });

  const onSubmit = async (data: ContratoFormValues) => {
    try {
      const response = await api.post("/contratos", data);
      console.log("Contrato criado:", response.data);
      toast({
        title: "Contrato adicionado!",
        description: "O contrato foi criado com sucesso.",
      });
      form.reset();
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Erro ao criar contrato!",
        description: "Ocorreu um erro ao criar o contrato.",
        variant: "destructive",
      });
    }

  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Novo Contrato</DialogTitle>
          <DialogDescription>
            Preencha os dados para criar um novo contrato
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="titulo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título do Contrato</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Contrato de Prestação de Serviços" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="pessoa"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contratante</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome da pessoa/empresa" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tipoPessoa"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Pessoa</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="fisica">Pessoa Física</SelectItem>
                        <SelectItem value="juridica">Pessoa Jurídica</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="dataInicio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data de Início</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dataFim"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data de Término</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="valor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Valor</FormLabel>
                    <FormControl>
                      <Input placeholder="R$ 0,00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="pendente">Pendente</SelectItem>
                        <SelectItem value="analise">Em Análise</SelectItem>
                        <SelectItem value="ativo">Ativo</SelectItem>
                        <SelectItem value="vencido">Vencido</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="responsavel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Responsável</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome do responsável" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="descricao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição (Opcional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Detalhes adicionais sobre o contrato"
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
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Cancelar
              </Button>
              <Button type="submit">Criar Contrato</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
