import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contratos from "./pages/Contratos";
import Certificados from "./pages/Certificados";
import Empresas from "./pages/Empresas";
import PessoasFisicas from "./pages/PessoasFisicas";
import Funcionarios from "./pages/Funcionarios";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contratos" element={<Contratos />} />
          <Route path="/certificados" element={<Certificados />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/pessoas-fisicas" element={<PessoasFisicas />} />
          <Route path="/funcionarios" element={<Funcionarios />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
