import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  FileText,
  Shield,
  Users,
  Building2,
  Settings,
  BarChart3,
  Menu,
  X,
  FolderOpen,
  UserCheck,
} from "lucide-react";
import gestumLogo from "@/assets/gestum-logo.jpg";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: BarChart3,
    href: "/",
  },
  {
    title: "Contratos",
    icon: FileText,
    href: "/contratos",
  },
  {
    title: "Certificados",
    icon: Shield,
    href: "/certificados",
  },
  {
    title: "Empresas",
    icon: Building2,
    href: "/empresas",
  },
  {
    title: "Pessoas Físicas",
    icon: Users,
    href: "/pessoas-fisicas",
  },
  {
    title: "Funcionários",
    icon: UserCheck,
    href: "/funcionarios",
  },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div
      className={cn(
        "bg-card border-r border-border transition-all duration-300 flex flex-col",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-3">
              <img
                src={gestumLogo}
                alt="GESTUM"
                className="w-10 h-10 rounded-lg object-contain bg-gradient-to-br from-primary to-secondary p-1"
              />
              <div>
                <h1 className="text-lg font-bold text-primary">GESTUM</h1>
                <p className="text-xs text-muted-foreground">Admin Panel</p>
              </div>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="h-8 w-8 p-0"
          >
            {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;

          return (
            <Link key={item.href} to={item.href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 h-10",
                  isCollapsed && "px-2",
                  isActive && "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-medium"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {!isCollapsed && <span>{item.title}</span>}
              </Button>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <div className={cn("flex items-center gap-3", isCollapsed && "justify-center")}>
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-primary-foreground">U</span>
          </div>
          {!isCollapsed && (
            <div className="flex-1">
              <p className="text-sm font-medium">Usuário Admin</p>
              <p className="text-xs text-muted-foreground">admin@gestum.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}