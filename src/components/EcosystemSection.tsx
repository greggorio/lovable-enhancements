import { 
  Globe, 
  Gamepad2, 
  UtensilsCrossed, 
  QrCode, 
  User, 
  Truck, 
  Smartphone, 
  BarChart3,
  Wifi,
  Puzzle
} from "lucide-react";

const ecosystemModules = [
  {
    icon: Globe,
    title: "Site",
    subtitle: "Vitrine Digital",
    description: "Landing page, eventos, galeria e cardápio em destaque. Temas white-label e agendamento sazonal.",
    color: "coral",
  },
  {
    icon: Gamepad2,
    title: "Engajamento",
    subtitle: "Quiz & Experiências",
    description: "Quiz ao vivo com IA, sorteios, campanhas de recompensas e notificações automáticas.",
    color: "violet",
  },
  {
    icon: UtensilsCrossed,
    title: "Operacional",
    subtitle: "Chão de Loja",
    description: "Mapa de salão, venda rápida, pedido assistido, checkout e KDS integrado.",
    color: "teal",
  },
  {
    icon: QrCode,
    title: "Cardápio Digital",
    subtitle: "Experiência na Mesa",
    description: "QR sem fricção, contas separadas, cardápio vivo, pagamento e idiomas múltiplos.",
    color: "amber",
  },
  {
    icon: User,
    title: "Área do Cliente",
    subtitle: "Retenção",
    description: "Gamificação, pontos, prêmios, delivery em andamento e favoritos em 1 clique.",
    color: "emerald",
  },
  {
    icon: Truck,
    title: "Delivery",
    subtitle: "Casa no Bolso",
    description: "Menu completo, Uber Direct ou retirada, pagamento digital e cozinha sincronizada.",
    color: "rose",
  },
  {
    icon: Smartphone,
    title: "App Nativo",
    subtitle: "Engajamento Mobile",
    description: "Push notifications, sorteios exclusivos e acesso unificado com performance nativa.",
    color: "coral",
  },
  {
    icon: BarChart3,
    title: "ERP",
    subtitle: "Backoffice",
    description: "Dashboard, cadastros com IA, tarefas Kanban, financeiro DRE e gestão fiscal.",
    color: "teal",
  },
  {
    icon: Wifi,
    title: "Infraestrutura",
    subtitle: "Periféricos",
    description: "Print Agent via WebSocket, impressão ESC/POS e fila resiliente offline.",
    color: "violet",
  },
  {
    icon: Puzzle,
    title: "Integrações",
    subtitle: "Conectividade",
    description: "WhatsApp, Uber, Google OAuth, OpenAI, gateways de pagamento e NFe/NFC-e.",
    color: "amber",
  },
];

const colorClasses = {
  coral: "feature-icon-coral",
  violet: "feature-icon-violet",
  teal: "feature-icon-teal",
  amber: "feature-icon-amber",
  emerald: "feature-icon-emerald",
  rose: "feature-icon-rose",
};

export function EcosystemSection() {
  return (
    <section id="solucoes" className="py-20 lg:py-28 bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-tag mx-auto mb-6">
            <span>🌐</span>
            <span>Ecossistema Completo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            10 Módulos Integrados
          </h2>
          <p className="text-lg text-muted-foreground">
            Um ecossistema onde cada módulo desempenha um papel vital na jornada do cliente 
            e na operação do seu estabelecimento.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {ecosystemModules.map((module, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border/50 card-hover group"
            >
              <div className={`feature-icon ${colorClasses[module.color as keyof typeof colorClasses]} mb-4 group-hover:scale-110 transition-transform`}>
                <module.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{module.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">{module.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
