import { Trophy, Gift, Star, TrendingUp, Award, Zap } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Acúmulo Automático",
    description: "Cada item aceito gera pontos baseado no valor. Parâmetro configurável no painel.",
  },
  {
    icon: Gift,
    title: "Catálogo de Recompensas",
    description: "Produtos, descontos percentuais ou fixos. Controle de estoque e validade.",
  },
  {
    icon: Star,
    title: "Extrato do Cliente",
    description: "Saldo, últimos movimentos e recompensas disponíveis na área logada.",
  },
  {
    icon: Award,
    title: "Resgates Auditados",
    description: "Validação de saldo, débito automático e histórico completo de movimentos.",
  },
  {
    icon: Zap,
    title: "Sorteios ao Vivo",
    description: "Painel de recompensas, botão para sortear e push com deeplink para o cliente.",
  },
  {
    icon: Trophy,
    title: "Dashboard de KPIs",
    description: "Rankings, histórico de resgates e top recompensas para o time de marketing.",
  },
];

export function GamificationSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="badge-tag mb-6">
              <span>🎮</span>
              <span>Programa de Pontos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Gamificação &<br />
              <span className="text-gradient">Recompensas</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Transforme cada venda em pontos, entregue ferramentas administrativas 
              completas e dê ao cliente visibilidade total do progresso.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="feature-icon feature-icon-amber shrink-0">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-light to-coral-light rounded-3xl p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-amber/10 rounded-full blur-2xl" />
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-coral/10 rounded-full blur-3xl" />
              
              {/* Content card */}
              <div className="bg-card rounded-2xl p-6 shadow-lg relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Seu saldo</p>
                    <p className="text-4xl font-bold text-foreground">1.250</p>
                    <p className="text-sm text-muted-foreground">pontos</p>
                  </div>
                  <div className="w-16 h-16 bg-amber-light rounded-2xl flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-amber" />
                  </div>
                </div>
                
                {/* Progress to next reward */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Próxima recompensa</span>
                    <span className="font-semibold text-foreground">250 pts</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber to-coral w-4/5 rounded-full" />
                  </div>
                  <p className="text-xs text-muted-foreground">Faltam 250 pontos para "Drink Grátis"</p>
                </div>
              </div>

              {/* Floating rewards */}
              <div className="mt-4 flex gap-3">
                <div className="bg-card/80 backdrop-blur rounded-xl p-3 flex-1 text-center">
                  <Gift className="w-5 h-5 text-coral mx-auto mb-1" />
                  <p className="text-xs font-medium text-foreground">3 prêmios</p>
                  <p className="text-xs text-muted-foreground">disponíveis</p>
                </div>
                <div className="bg-card/80 backdrop-blur rounded-xl p-3 flex-1 text-center">
                  <Star className="w-5 h-5 text-amber mx-auto mb-1" />
                  <p className="text-xs font-medium text-foreground">Nível Gold</p>
                  <p className="text-xs text-muted-foreground">cliente VIP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
