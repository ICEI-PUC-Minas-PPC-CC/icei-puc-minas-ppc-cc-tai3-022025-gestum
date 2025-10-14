import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Building2 } from "lucide-react";
import { EmpresaForm } from "@/components/EmpresaForm";
import { StatCard } from "@/components/StatCard";

const empresas = [
  {
    id: 1,
    razaoSocial: "Tech Solutions LTDA",
    nomeFantasia: "Tech Solutions",
    cnpj: "12345678000190",
    status: true,
    plano: "Gold",
    ativacao: "2024-01-15"
  },
  {
    id: 2,
    razaoSocial: "Indústria ABC S.A.",
    nomeFantasia: "ABC Industries",
    cnpj: "98765432000110",
    status: true,
    plano: "Diamond",
    ativacao: "2023-11-20"
  },
  {
    id: 3,
    razaoSocial: "Consultoria XYZ",
    nomeFantasia: "XYZ Consulting",
    cnpj: "11223344000155",
    status: false,
    plano: "Silver",
    ativacao: "2024-03-10"
  }
];

export default function Empresas() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const ativas = empresas.filter(e => e.status).length;
  const inativas = empresas.filter(e => !e.status).length;

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
              <Building2 className="h-8 w-8 text-primary" />
              Empresas
            </h1>
            <p className="text-muted-foreground mt-1">
              Gerencie empresas e seus planos
            </p>
          </div>
          <Button onClick={() => setIsFormOpen(true)} className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Plus className="h-4 w-4" />
            Nova Empresa
          </Button>
        </div>

        <EmpresaForm open={isFormOpen} onOpenChange={setIsFormOpen} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            title="Empresas Ativas"
            value={ativas}
            icon={Building2}
          />
          <StatCard
            title="Empresas Inativas"
            value={inativas}
            icon={Building2}
          />
          <StatCard
            title="Total"
            value={empresas.length}
            icon={Building2}
          />
        </div>

        <div className="bg-card rounded-lg border shadow-sm">
          <div className="p-4 border-b">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por razão social, CNPJ..."
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
                  <th className="text-left p-4 font-medium text-muted-foreground">Razão Social</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Nome Fantasia</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">CNPJ</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Plano</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Ativação</th>
                </tr>
              </thead>
              <tbody>
                {empresas.map((empresa) => (
                  <tr key={empresa.id} className="border-b hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-medium">#{empresa.id}</td>
                    <td className="p-4">{empresa.razaoSocial}</td>
                    <td className="p-4">{empresa.nomeFantasia}</td>
                    <td className="p-4 font-mono text-sm">{empresa.cnpj}</td>
                    <td className="p-4">
                      <Badge variant="secondary">{empresa.plano}</Badge>
                    </td>
                    <td className="p-4">
                      <Badge variant={empresa.status ? "default" : "destructive"}>
                        {empresa.status ? "Ativa" : "Inativa"}
                      </Badge>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{empresa.ativacao}</td>
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
