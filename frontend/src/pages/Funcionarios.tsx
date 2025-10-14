import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, UserCog } from "lucide-react";
import { FuncionarioForm } from "@/components/FuncionarioForm";
import { StatCard } from "@/components/StatCard";

const funcionarios = [
  {
    id: 1,
    nome: "Carlos Souza",
    email: "carlos@techsolutions.com",
    contato: "11987654321",
    empresa: "Tech Solutions",
    status: true,
    ativacao: "2024-01-15"
  },
  {
    id: 2,
    nome: "Ana Costa",
    email: "ana@abcindustries.com",
    contato: "11876543210",
    empresa: "ABC Industries",
    status: true,
    ativacao: "2024-02-10"
  },
  {
    id: 3,
    nome: "Roberto Lima",
    email: "roberto@xyzconsulting.com",
    contato: "11765432109",
    empresa: "XYZ Consulting",
    status: false,
    ativacao: "2023-11-05"
  }
];

export default function Funcionarios() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const ativos = funcionarios.filter(f => f.status).length;
  const inativos = funcionarios.filter(f => !f.status).length;

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
              <UserCog className="h-8 w-8 text-primary" />
              Funcionários
            </h1>
            <p className="text-muted-foreground mt-1">
              Gerencie funcionários das empresas
            </p>
          </div>
          <Button onClick={() => setIsFormOpen(true)} className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Plus className="h-4 w-4" />
            Novo Funcionário
          </Button>
        </div>

        <FuncionarioForm open={isFormOpen} onOpenChange={setIsFormOpen} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            title="Funcionários Ativos"
            value={ativos}
            icon={UserCog}
          />
          <StatCard
            title="Funcionários Inativos"
            value={inativos}
            icon={UserCog}
          />
          <StatCard
            title="Total"
            value={funcionarios.length}
            icon={UserCog}
          />
        </div>

        <div className="bg-card rounded-lg border shadow-sm">
          <div className="p-4 border-b">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por nome, email..."
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
                  <th className="text-left p-4 font-medium text-muted-foreground">Email</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Contato</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Empresa</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {funcionarios.map((func) => (
                  <tr key={func.id} className="border-b hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-medium">#{func.id}</td>
                    <td className="p-4">{func.nome}</td>
                    <td className="p-4 text-sm">{func.email}</td>
                    <td className="p-4 font-mono text-sm">{func.contato}</td>
                    <td className="p-4">{func.empresa}</td>
                    <td className="p-4">
                      <Badge variant={func.status ? "default" : "destructive"}>
                        {func.status ? "Ativo" : "Inativo"}
                      </Badge>
                    </td>
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
