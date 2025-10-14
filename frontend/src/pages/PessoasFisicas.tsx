import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, User } from "lucide-react";
import { PessoaFisicaForm } from "@/components/PessoaFisicaForm";
import { StatCard } from "@/components/StatCard";

const pessoasFisicas = [
  {
    id: 1,
    nome: "João Silva",
    cpf: "12345678901",
    empresa: "Tech Solutions",
    status: true,
    ativacao: "2024-01-15"
  },
  {
    id: 2,
    nome: "Maria Santos",
    cpf: "98765432109",
    empresa: "ABC Industries",
    status: true,
    ativacao: "2024-02-20"
  },
  {
    id: 3,
    nome: "Pedro Oliveira",
    cpf: "11223344556",
    empresa: "XYZ Consulting",
    status: false,
    ativacao: "2023-12-10"
  }
];

export default function PessoasFisicas() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const ativas = pessoasFisicas.filter(p => p.status).length;
  const inativas = pessoasFisicas.filter(p => !p.status).length;

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
              <User className="h-8 w-8 text-primary" />
              Pessoas Físicas
            </h1>
            <p className="text-muted-foreground mt-1">
              Gerencie pessoas físicas do sistema
            </p>
          </div>
          <Button onClick={() => setIsFormOpen(true)} className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Plus className="h-4 w-4" />
            Nova Pessoa
          </Button>
        </div>

        <PessoaFisicaForm open={isFormOpen} onOpenChange={setIsFormOpen} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            title="Pessoas Ativas"
            value={ativas}
            icon={User}
          />
          <StatCard
            title="Pessoas Inativas"
            value={inativas}
            icon={User}
          />
          <StatCard
            title="Total"
            value={pessoasFisicas.length}
            icon={User}
          />
        </div>

        <div className="bg-card rounded-lg border shadow-sm">
          <div className="p-4 border-b">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por nome, CPF..."
                  className="pl-9"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-4 font-medium text-muted-foreground">ID</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Nome</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">CPF</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Empresa</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Ativação</th>
                </tr>
              </thead>
              <tbody>
                {pessoasFisicas.map((pessoa) => (
                  <tr key={pessoa.id} className="border-b hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-medium">#{pessoa.id}</td>
                    <td className="p-4">{pessoa.nome}</td>
                    <td className="p-4 font-mono text-sm">{pessoa.cpf}</td>
                    <td className="p-4">{pessoa.empresa}</td>
                    <td className="p-4">
                      <Badge variant={pessoa.status ? "default" : "destructive"}>
                        {pessoa.status ? "Ativa" : "Inativa"}
                      </Badge>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{pessoa.ativacao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
