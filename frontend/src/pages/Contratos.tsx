import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Plus,
  Search,
  FileText,
  Calendar,
  User,
  Building2,
  MoreHorizontal,
} from "lucide-react";
import { ContratoForm } from "@/components/ContratoForm";

// Mock data
const contratos = [
  {
    id: "CT001",
    titulo: "Contrato de Prestação de Serviços - TechCorp",
    pessoa: "TechCorp Solutions Ltda",
    tipo: "juridica",
    dataInicio: "2024-01-15",
    dataFim: "2024-12-15",
    status: "ativo",
    valor: "R$ 50.000,00",
    responsavel: "João Silva",
  },
  {
    id: "CT002",
    titulo: "Contrato de Consultoria - Maria Santos",
    pessoa: "Maria Santos",
    tipo: "fisica",
    dataInicio: "2024-02-01",
    dataFim: "2024-08-01",
    status: "vencido",
    valor: "R$ 15.000,00",
    responsavel: "Ana Costa",
  },
  {
    id: "CT003",
    titulo: "Contrato de Manutenção - Sistemas Avançados",
    pessoa: "Sistemas Avançados S.A.",
    tipo: "juridica",
    dataInicio: "2024-03-10",
    dataFim: "2025-03-10",
    status: "ativo",
    valor: "R$ 80.000,00",
    responsavel: "Carlos Oliveira",
  },
  {
    id: "CT004",
    titulo: "Contrato de Desenvolvimento - StartupX",
    pessoa: "StartupX Inovações",
    tipo: "juridica",
    dataInicio: "2024-04-01",
    dataFim: "2024-10-01",
    status: "analise",
    valor: "R$ 120.000,00",
    responsavel: "Pedro Lima",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "ativo":
      return "bg-secondary text-secondary-foreground";
    case "vencido":
      return "bg-destructive text-destructive-foreground";
    case "analise":
      return "bg-yellow-500 text-white";
    case "pendente":
      return "bg-muted text-muted-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case "ativo":
      return "Ativo";
    case "vencido":
      return "Vencido";
    case "analise":
      return "Em Análise";
    case "pendente":
      return "Pendente";
    default:
      return status;
  }
};

export default function Contratos() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Contratos</h1>
            <p className="text-muted-foreground">
              Gerencie todos os contratos do sistema
            </p>
          </div>
          <Button 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            onClick={() => setIsFormOpen(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            Novo Contrato
          </Button>
        </div>

        <ContratoForm open={isFormOpen} onOpenChange={setIsFormOpen} />

        {/* Filters */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg">Filtros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar contratos..."
                    className="pl-10"
                  />
                </div>
              </div>
              <Button variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Data
              </Button>
              <Button variant="outline">Status</Button>
            </div>
          </CardContent>
        </Card>

        {/* Contracts Table */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Lista de Contratos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Título</TableHead>
                  <TableHead>Contratante</TableHead>
                  <TableHead>Período</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Responsável</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contratos.map((contrato) => (
                  <TableRow key={contrato.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{contrato.id}</TableCell>
                    <TableCell>
                      <div className="font-medium">{contrato.titulo}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {contrato.tipo === "juridica" ? (
                          <Building2 className="h-4 w-4 text-primary" />
                        ) : (
                          <User className="h-4 w-4 text-secondary" />
                        )}
                        <span className="text-sm">{contrato.pessoa}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{new Date(contrato.dataInicio).toLocaleDateString('pt-BR')}</div>
                        <div className="text-muted-foreground">
                          até {new Date(contrato.dataFim).toLocaleDateString('pt-BR')}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium">{contrato.valor}</span>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(contrato.status)}>
                        {getStatusLabel(contrato.status)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{contrato.responsavel}</span>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}