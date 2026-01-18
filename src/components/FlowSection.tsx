import { QrCode, Send, ChefHat, CreditCard, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: QrCode,
    title: "Escaneia o QR",
    description: "Cliente informa o nome, entra na mesa e vê o cardápio. Login opcional via Google.",
    color: "coral",
  },
  {
    number: "02",
    icon: Send,
    title: "Faz o pedido",
    description: "Itens por pessoa, com observações e confirmação no próprio celular. Cardápio vivo.",
    color: "amber",
  },
  {
    number: "03",
    icon: ChefHat,
    title: "Vai para o KDS",
    description: "Bar/cozinha recebem por estação com status por item. Timer e priorização automática.",
    color: "emerald",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Paga o consumo",
    description: "PIX no cliente ou quitação no Admin por pessoa/mesa. Comprovante via WhatsApp.",
    color: "teal",
  },
];

const colorClasses = {
  coral: "feature-icon-coral",
  amber: "feature-icon-amber",
  emerald: "feature-icon-emerald",
  teal: "feature-icon-teal",
};

const numberColors = {
  coral: "text-coral/20",
  amber: "text-amber/20",
  emerald: "text-emerald/20",
  teal: "text-teal/20",
};

export function FlowSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-tag mx-auto mb-6">
            <span>📱</span>
            <span>Do pedido ao pagamento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Fluxo do pedido em 4 passos
          </h2>
          <p className="text-lg text-muted-foreground">
            QR na mesa → pedido → produção → pagamento
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-card rounded-2xl p-6 border border-border/50 card-hover h-full relative overflow-hidden">
                {/* Background number */}
                <span className={`absolute top-4 right-4 text-6xl font-bold ${numberColors[step.color as keyof typeof numberColors]}`}>
                  {step.number}
                </span>
                
                <div className={`feature-icon ${colorClasses[step.color as keyof typeof colorClasses]} mb-5 relative z-10 group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                  <ArrowRight className="w-6 h-6 text-coral" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
