import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Setup em menos de 24h",
  "Suporte técnico dedicado",
  "Treinamento incluso",
  "Atualizações automáticas",
];

export function CTASection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <div className="bg-gradient-to-br from-coral to-coral-dark rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Pronto para transformar<br />
              seu estabelecimento?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Agende uma demonstração gratuita e descubra como o SmartData 
              pode revolucionar a gestão do seu bar ou restaurante.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-coral hover:bg-white/90 font-semibold px-8 text-base">
                Agendar Demonstração
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 text-base">
                Falar com Vendas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
