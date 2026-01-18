import { QrCode, Monitor, CreditCard, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: QrCode, label: "Cardápio por QR", description: "Sem garçom" },
  { icon: Monitor, label: "Tela KDS", description: "Cozinha ágil" },
  { icon: CreditCard, label: "Conta por pessoa", description: "Split fácil" },
  { icon: Package, label: "ERP integrado", description: "Gestão total" },
];

export function HeroSection() {
  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-coral-light/20 -z-10" />
      
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="badge-tag">
              <span className="text-lg">🍽️</span>
              <span>Suite: Site + Cardápio + KDS + ERP</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                ERP para Bares &<br />
                Restaurantes com Site,<br />
                Cardápio QR e KDS
              </h1>
              <p className="text-2xl sm:text-3xl font-semibold text-gradient">
                Gestão Completa para<br />
                Bares e Restaurantes
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Pedidos por QR com conta por convidado, KDS por estação (bar/cozinha) 
              e ERP integrado (estoque, NFe, fichas técnicas). Site personalizado com 
              sua marca e fotos incluso no pacote.
            </p>
            
            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`feature-icon ${
                    index === 0 ? 'feature-icon-coral' :
                    index === 1 ? 'feature-icon-teal' :
                    index === 2 ? 'feature-icon-amber' :
                    'feature-icon-emerald'
                  }`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-coral-dark text-accent-foreground shadow-accent font-semibold px-8 text-base">
                Agendar Demonstração
              </Button>
              <Button size="lg" variant="outline" className="font-semibold px-8 text-base">
                Ver Preços
              </Button>
            </div>
          </div>
          
          {/* Hero Image/Mockup */}
          <div className="relative lg:pl-8">
            <div className="relative animate-float">
              {/* Main device mockup */}
              <div className="bg-card rounded-3xl shadow-xl p-2 border border-border/50">
                <div className="bg-gradient-to-br from-emerald/10 to-teal/10 rounded-2xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-teal/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Monitor className="w-10 h-10 text-teal" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Dashboard em Tempo Real</h3>
                    <p className="text-muted-foreground text-sm">KPIs, vendas e ocupação ao vivo</p>
                  </div>
                </div>
              </div>
              
              {/* Floating card - Mobile */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-card rounded-2xl shadow-lg p-4 border border-border/50 w-48">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-coral-light rounded-xl flex items-center justify-center">
                    <QrCode className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">App Mobile</p>
                    <p className="text-sm font-semibold text-foreground">Cardápio Digital</p>
                  </div>
                </div>
              </div>
              
              {/* Floating card - Stats */}
              <div className="absolute -top-4 -left-4 lg:-left-8 bg-card rounded-2xl shadow-lg p-4 border border-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-light rounded-lg flex items-center justify-center">
                    <span className="text-emerald font-bold text-sm">↑</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Ticket Médio</p>
                    <p className="text-lg font-bold text-foreground">R$ 127</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
