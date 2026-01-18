import { MessageCircle, Truck, CreditCard, Brain, Mail, FileText, ShieldCheck } from "lucide-react";

const integrations = [
  {
    icon: MessageCircle,
    name: "WhatsApp Business",
    description: "Envio automático de comprovantes e vouchers via API oficial.",
    color: "emerald",
  },
  {
    icon: Truck,
    name: "Uber Direct",
    description: "Entregadores Uber automaticamente quando o pedido fica pronto.",
    color: "coral",
  },
  {
    icon: CreditCard,
    name: "Multi-Gateway",
    description: "MercadoPago e PagSeguro integrados. Troque de provedor quando quiser.",
    color: "teal",
  },
  {
    icon: Brain,
    name: "OpenAI",
    description: "Traduz cardápios e cria Quizzes. Configurável por modelo GPT.",
    color: "violet",
  },
  {
    icon: Mail,
    name: "E-mail SMTP",
    description: "Envios transacionais com remetente próprio para credibilidade.",
    color: "amber",
  },
  {
    icon: FileText,
    name: "Fiscal Automático",
    description: "Emissão de NFC-e e NF-e integrada ao fluxo de venda.",
    color: "rose",
  },
];

const colorClasses = {
  emerald: "feature-icon-emerald",
  coral: "feature-icon-coral",
  teal: "feature-icon-teal",
  violet: "feature-icon-violet",
  amber: "feature-icon-amber",
  rose: "feature-icon-rose",
};

export function IntegrationsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-tag mx-auto mb-6">
            <span>🔗</span>
            <span>Conectividade</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Integrações que<br />
            <span className="text-gradient">fazem a diferença</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tecnologia que conecta seu bar ao mundo, sem esforço.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border/50 card-hover group"
            >
              <div className={`feature-icon ${colorClasses[integration.color as keyof typeof colorClasses]} mb-4 group-hover:scale-110 transition-transform`}>
                <integration.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{integration.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {integration.description}
              </p>
            </div>
          ))}
        </div>

        {/* Security badge */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-3 bg-secondary/50 rounded-full px-6 py-3">
            <ShieldCheck className="w-5 h-5 text-emerald" />
            <span className="text-sm font-medium text-foreground">
              Login Social via Google OAuth2 • Certificado Digital A1
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
