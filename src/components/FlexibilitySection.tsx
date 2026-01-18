import { Bell, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Botão de Chamar Garçom",
    description: "Disponível no cardápio digital para clientes que preferem atendimento pessoal ou precisam de ajuda.",
    color: "amber",
  },
  {
    icon: Users,
    title: "Modelo Híbrido",
    description: "Combine autoatendimento com atendimento tradicional. Garçons recebem notificações em tempo real.",
    color: "coral",
  },
  {
    icon: Sparkles,
    title: "Escolha do Cliente",
    description: "Jovens fazem pedidos sozinhos, idosos chamam garçom, grupos grandes têm auxílio personalizado.",
    color: "teal",
  },
];

const bgColors = {
  amber: "bg-amber-light",
  coral: "bg-coral-light",
  teal: "bg-teal-light",
};

const iconColors = {
  amber: "text-amber",
  coral: "text-coral",
  teal: "text-teal",
};

export function FlexibilitySection() {
  return (
    <section className="py-16 lg:py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Flexibilidade Operacional
          </h2>
          <p className="text-muted-foreground">
            O cliente escolhe como quer ser atendido
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${bgColors[feature.color as keyof typeof bgColors]} rounded-2xl p-6 card-hover`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-card flex items-center justify-center`}>
                  <feature.icon className={`w-5 h-5 ${iconColors[feature.color as keyof typeof iconColors]}`} />
                </div>
                <h3 className="font-bold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
