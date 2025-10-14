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
  Shield,
  Calendar,
  User,
  Building2,
  MoreHorizontal,
  Award,
} from "lucide-react";
import { CertificadoForm } from "@/components/CertificadoForm";

// Mock data
const certificados = [
  {
    id: "CERT001",
    nome: "Certificado ISO 9001",
    pessoa: "TechCorp Solutions Ltda",
    tipo: "juridica",
    tipoCertificado: "ISO",
    dataEmissao: "2024-01-15",
    dataValidade: "2027-01-15",
    status: "ativo",
    orgaoEmissor: "Bureau Veritas",
  },
  {
    id: "CERT002",
    nome: "Certificado Digital A3",
    pessoa: "Maria Santos",
    tipo: "fisica",
    tipoCertificado: "Digital",
    dataEmissao: "2024-03-10",
    dataValidade: "2025-03-10",
    status: "ativo",
    orgaoEmissor: "Serasa Experian",
  },
  {
    id: "CERT003",
    nome: "Certificado de Segurança do Trabalho",
    pessoa: "João Silva",
    tipo: "fisica",
    tipoCertificado: "Segurança",
    dataEmissao: "2023-06-20",
    dataValidade: "2024-06-20",
    status: "vencido",
    orgaoEmissor: "CREA-SP",
  },
  {
    id: "CERT004",
    nome: "Certificado de Curso Técnico",
    pessoa: "Ana Costa",
    tipo: "fisica",
    tipoCertificado: "Curso",
    dataEmissao: "2024-02-01",
    dataValidade: "2029-02-01",
    status: "ativo",
    orgaoEmissor: "SENAI",
  },
  {
    id: "CERT005",
    nome: "Certificado ISO 27001",
    pessoa: "Sistemas Avançados S.A.",
    tipo: "juridica",
    tipoCertificado: "ISO",
    dataEmissao: "2024-04-15",
    dataValidade: "2026-04-15",
    status: "analise",
    orgaoEmissor: "DNV GL",
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

const getTipoCertificadoColor = (tipo: string) => {
  switch (tipo) {
    case "ISO":
      return "bg-blue-100 text-blue-800";
    case "Digital":
      return "bg-green-100 text-green-800";
    case "Segurança":
      return "bg-red-100 text-red-800";
    case "Curso":
      return "bg-purple-100 text-purple-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function Certificados() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Certificados</h1>
            <p className="text-muted-foreground">
              Gerencie todos os certificados do sistema
            </p>
          </div>
          <Button 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            onClick={() => setIsFormOpen(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            Novo Certificado
          </Button>
        </div>

        <CertificadoForm open={isFormOpen} onOpenChange={setIsFormOpen} />

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Ativos</p>
                  <p className="text-2xl font-bold text-secondary">3</p>
                </div>
                <Shield className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Vencidos</p>
                  <p className="text-2xl font-bold text-destructive">1</p>
                </div>
                <Calendar className="h-8 w-8 text-destructive" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Em Análise</p>
                  <p className="text-2xl font-bold text-yellow-600">1</p>
                </div>
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="text-2xl font-bold text-primary">5</p>
                </div>
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

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
                    placeholder="Buscar certificados..."
                    className="pl-10"
                  />
                </div>
              </div>
              <Button variant="outline">Tipo</Button>
              <Button variant="outline">Status</Button>
              <Button variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Validade
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Certificates Table */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Lista de Certificados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Portador</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Validade</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Órgão Emissor</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {certificados.map((certificado) => (
                  <TableRow key={certificado.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{certificado.id}</TableCell>
                    <TableCell>
                      <div className="font-medium">{certificado.nome}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {certificado.tipo === "juridica" ? (
                          <Building2 className="h-4 w-4 text-primary" />
                        ) : (
                          <User className="h-4 w-4 text-secondary" />
                        )}
                        <span className="text-sm">{certificado.pessoa}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getTipoCertificadoColor(certificado.tipoCertificado)}>
                        {certificado.tipoCertificado}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>Emitido: {new Date(certificado.dataEmissao).toLocaleDateString('pt-BR')}</div>
                        <div className="text-muted-foreground">
                          Válido até: {new Date(certificado.dataValidade).toLocaleDateString('pt-BR')}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(certificado.status)}>
                        {getStatusLabel(certificado.status)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{certificado.orgaoEmissor}</span>
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