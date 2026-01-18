import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ClipboardList, 
  Wrench, 
  Calculator,
  Clock,
  FileCode
} from "lucide-react";

const erpFeatures = [
  {
    icon: LayoutDashboard,
    title: "Dashboard em Tempo Real",
    items: ["KPIs instantâneos (pedidos, mesas, ticket)", "Vendas por meio de pagamento", "Alertas de validade de produtos", "Painéis modulares arrastar/soltar"],
  },
  {
    icon: Package,
    title: "Cadastros Inteligentes",
    items: ["Tradução automática por IA (PT/EN/ES)", "Harmonização e sugestão de upsell", "Ficha técnica com custo real", "QR Code híbrido para mesas"],
  },
  {
    icon: ClipboardList,
    title: "Tarefas & Kanban",
    items: ["Quadros e listas customizáveis", "Time tracking start/stop", "Histórico de sessões por card", "KPIs de esforço estimado vs real"],
  },
  {
    icon: Calculator,
    title: "Financeiro Completo",
    items: ["DRE em tempo real", "Cálculo automático de comissões", "Caixa blindado com auditoria", "Recebimento de mercadoria via XML"],
  },
];

export function ERPSection() {
  return (
    <section id="tecnologia" className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary-foreground/10 text-primary-foreground mb-6">
              <span>⚙️</span>
              <span>Backoffice Completo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              ERP que<br />
              <span className="text-coral">sustenta tudo</span>
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              A fundação que sustenta todo o ecossistema. Dashboard operacional, 
              cadastros inteligentes, tarefas com time tracking e extensibilidade low-code.
            </p>

            {/* Additional features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Permissões</p>
                  <p className="text-xs text-primary-foreground/60">Menu dinâmico por grupo</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-sm">PCP Gastronômico</p>
                  <p className="text-xs text-primary-foreground/60">Baixa automática de estoque</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Validade</p>
                  <p className="text-xs text-primary-foreground/60">Workflow de verificação</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <FileCode className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Low-code</p>
                  <p className="text-xs text-primary-foreground/60">Formulários dinâmicos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {erpFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-primary-foreground/5 backdrop-blur rounded-2xl p-5 border border-primary-foreground/10"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-coral" />
                </div>
                <h3 className="font-bold text-primary-foreground mb-3 text-sm">
                  {feature.title}
                </h3>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="text-xs text-primary-foreground/60 flex items-start gap-2">
                      <span className="text-coral mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
