import { Layout } from "@/components/Layout";
import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Shield,
  Users,
  Building2,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
} from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">
              Visão geral do sistema de gestão de contratos e certificados
            </p>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <TrendingUp className="w-4 h-4 mr-2" />
            Relatório Geral
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Contratos Ativos"
            value={128}
            change="+12%"
            changeType="positive"
            icon={FileText}
            description="vs. mês anterior"
          />
          <StatCard
            title="Certificados Válidos"
            value={256}
            change="+8%"
            changeType="positive"
            icon={Shield}
            description="até hoje"
          />
          <StatCard
            title="Pessoas Cadastradas"
            value={89}
            change="+5%"
            changeType="positive"
            icon={Users}
            description="físicas e jurídicas"
          />
          <StatCard
            title="Empresas Ativas"
            value={34}
            change="0%"
            changeType="neutral"
            icon={Building2}
            description="sem alteração"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                Status dos Documentos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <span className="text-sm">Ativos</span>
                  </div>
                  <span className="text-sm font-medium">234</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Próximos ao Vencimento</span>
                  </div>
                  <span className="text-sm font-medium">18</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-destructive rounded-full"></div>
                    <span className="text-sm">Vencidos</span>
                  </div>
                  <span className="text-sm font-medium">7</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-muted rounded-full"></div>
                    <span className="text-sm">Em Análise</span>
                  </div>
                  <span className="text-sm font-medium">12</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Ações Rápidas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start hover:bg-gradient-subtle"
              >
                <FileText className="w-4 h-4 mr-2" />
                Novo Contrato
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start hover:bg-gradient-subtle"
              >
                <Shield className="w-4 h-4 mr-2" />
                Novo Certificado
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start hover:bg-gradient-subtle"
              >
                <Users className="w-4 h-4 mr-2" />
                Cadastrar Pessoa
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start hover:bg-gradient-subtle"
              >
                <Building2 className="w-4 h-4 mr-2" />
                Cadastrar Empresa
              </Button>
            </CardContent>
          </Card> */}
          <Card className="border-l-4 border-l-yellow-500 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-700">
                <AlertTriangle className="h-5 w-5" />
                Alertas e Notificações
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>18 documentos</strong> vencem nos próximos 30 dias
                </p>
                <p className="text-sm">
                  <strong>7 documentos</strong> já estão vencidos e precisam ser renovados
                </p>
                <p className="text-sm">
                  <strong>12 documentos</strong> estão pendentes de análise
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

{/*         <Card className="border-l-4 border-l-yellow-500 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-700">
              <AlertTriangle className="h-5 w-5" />
              Alertas e Notificações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm">
                <strong>18 documentos</strong> vencem nos próximos 30 dias
              </p>
              <p className="text-sm">
                <strong>7 documentos</strong> já estão vencidos e precisam ser renovados
              </p>
              <p className="text-sm">
                <strong>12 documentos</strong> estão pendentes de análise
              </p>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </Layout>
  );
};

export default Index;
