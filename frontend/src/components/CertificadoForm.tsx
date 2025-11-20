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

const certificadoSchema = z.object({
  nome: z.string().min(5, "Nome deve ter no mínimo 5 caracteres"),
  pessoa: z.string().min(3, "Nome da pessoa é obrigatório"),
  tipoPessoa: z.enum(["fisica", "juridica"]),
  tipoCertificado: z.string().min(1, "Tipo de certificado é obrigatório"),
  dataEmissao: z.string().min(1, "Data de emissão é obrigatória"),
  dataValidade: z.string().min(1, "Data de validade é obrigatória"),
  status: z.enum(["ativo", "vencido", "analise", "pendente"]),
  orgaoEmissor: z.string().min(3, "Órgão emissor é obrigatório"),
  descricao: z.string().optional(),
});

type CertificadoFormValues = z.infer<typeof certificadoSchema>;

interface CertificadoFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CertificadoForm({ open, onOpenChange }: CertificadoFormProps) {
  const form = useForm<CertificadoFormValues>({
    resolver: zodResolver(certificadoSchema),
    defaultValues: {
      nome: "",
      pessoa: "",
      tipoPessoa: "fisica",
      tipoCertificado: "",
      dataEmissao: "",
      dataValidade: "",
      status: "pendente",
      orgaoEmissor: "",
      descricao: "",
    },
  });

  const onSubmit = async (data: CertificadoFormValues) => {
    try {
      const response = await api.post("/certificados", data);
      console.log("Certificado criado:", response.data);
      toast({
        title: "Certificado adicionado!",
        description: "O certificado foi criado com sucesso.",
      });
      form.reset();
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Erro ao criar certificado!",
        description: "Ocorreu um erro ao criar o certificado.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Novo Certificado</DialogTitle>
          <DialogDescription>
            Preencha os dados para criar um novo certificado
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome do Certificado</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Certificado ISO 9001" {...field} />
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
                    <FormLabel>Portador</FormLabel>
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
                name="tipoCertificado"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Certificado</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ISO">ISO</SelectItem>
                        <SelectItem value="Digital">Digital</SelectItem>
                        <SelectItem value="Segurança">Segurança</SelectItem>
                        <SelectItem value="Curso">Curso</SelectItem>
                        <SelectItem value="Outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
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

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="dataEmissao"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data de Emissão</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dataValidade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data de Validade</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="orgaoEmissor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Órgão Emissor</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Bureau Veritas, SENAI, etc." {...field} />
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
                      placeholder="Detalhes adicionais sobre o certificado"
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
              <Button type="submit">Criar Certificado</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
