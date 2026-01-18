import { Brain, Zap, Users, Trophy, Sparkles, Clock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Sessão em 1 clique",
    description: "Escolha categoria, número de perguntas e tempo. QR Code gerado na hora.",
  },
  {
    icon: Brain,
    title: "Geração por IA",
    description: "Informe o tema e a IA entrega lotes prontos. Ótimo para campanhas sazonais.",
  },
  {
    icon: Users,
    title: "Entrada ao vivo",
    description: "Jogadores entram via QR, escolhem nickname e aguardam no lobby.",
  },
  {
    icon: Clock,
    title: "Ranking em tempo real",
    description: "Quem acerta primeiro ganha mais pontos. Timer visível para todos.",
  },
  {
    icon: Trophy,
    title: "Pódio final",
    description: "Tela de ranking pronta para foto/redes, destacando o prêmio da rodada.",
  },
  {
    icon: Sparkles,
    title: "Banco turbinado",
    description: "CRUD de categorias, importação JSON/CSV e dedupe automático.",
  },
];

export function QuizSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-violet-light/50 to-coral-light/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <div className="order-2 lg:order-1 relative">
            <div className="bg-card rounded-3xl p-6 shadow-xl border border-border/50">
              {/* Quiz header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-violet-light rounded-xl flex items-center justify-center">
                    <Brain className="w-5 h-5 text-violet" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Quiz ao Vivo</p>
                    <p className="text-xs text-muted-foreground">Categoria: Música dos Anos 80</p>
                  </div>
                </div>
                <div className="bg-coral-light px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-coral">⏱ 15s</span>
                </div>
              </div>

              {/* Question */}
              <div className="bg-secondary/50 rounded-2xl p-6 mb-6">
                <p className="text-sm text-muted-foreground mb-2">Pergunta 5 de 10</p>
                <p className="text-lg font-semibold text-foreground">
                  Qual banda lançou o álbum "Back in Black" em 1980?
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {["AC/DC", "Led Zeppelin", "Queen", "Pink Floyd"].map((option, i) => (
                  <button
                    key={i}
                    className={`p-4 rounded-xl text-left font-medium transition-all ${
                      i === 0 
                        ? 'bg-emerald-light text-emerald border-2 border-emerald' 
                        : 'bg-card border border-border hover:border-violet/50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {/* Live ranking */}
              <div className="bg-secondary/30 rounded-xl p-4">
                <p className="text-xs font-semibold text-muted-foreground mb-3">🏆 Ranking ao Vivo</p>
                <div className="space-y-2">
                  {[
                    { name: "João S.", points: 450, position: 1 },
                    { name: "Maria L.", points: 380, position: 2 },
                    { name: "Pedro K.", points: 320, position: 3 },
                  ].map((player) => (
                    <div key={player.position} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          player.position === 1 ? 'bg-amber text-amber-foreground' :
                          player.position === 2 ? 'bg-secondary text-foreground' :
                          'bg-coral-light text-coral'
                        }`}>
                          {player.position}
                        </span>
                        <span className="text-sm font-medium text-foreground">{player.name}</span>
                      </div>
                      <span className="text-sm font-bold text-foreground">{player.points} pts</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="badge-tag mb-6">
              <span>🧠</span>
              <span>Engajamento com IA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Quiz ao Vivo<br />
              <span className="text-gradient">Turbinado por IA</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Trivia rápida com QR Code e ranking ao vivo para engajar a casa em minutos. 
              Perguntas geradas por inteligência artificial.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="feature-icon feature-icon-violet shrink-0">
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
        </div>
      </div>
    </section>
  );
}
