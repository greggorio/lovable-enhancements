import { useState } from "react";
import { Play, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const videos = [
  {
    id: 1,
    youtubeId: "dQw4w9WgXcQ", // Placeholder - substituir pelo ID real
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=340&fit=crop",
    badge: "Atendimento",
    badgeColor: "bg-coral-light text-coral",
    title: "Faltou garçom? O atendimento não para.",
    description: "Troque o modo de atendimento com 1 clique e o cliente é notificado automaticamente.",
    hook: "O garçom faltou no meio do rush?",
    transcription: "Gancho: O garçom faltou no meio do rush? Problema: Você está com a casa cheia e de repente fica sem um funcionário. Solução: Com o SmartData, você troca o modo de atendimento com um clique. O cliente recebe uma notificação automática para retirar no balcão. Resultado: Atendimento continua fluindo, sem stress. Agende uma demo e veja como funciona.",
  },
  {
    id: 2,
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=340&fit=crop",
    badge: "Pagamento",
    badgeColor: "bg-emerald-light text-emerald",
    title: "Fila no caixa depois do show? Some.",
    description: "Self-checkout no celular: o cliente paga e vai embora feliz.",
    hook: "Evento acabou e a fila travou?",
    transcription: "Gancho: Evento acabou e a fila no caixa travou? Problema: Cliente vai da euforia à irritação em 2 minutos esperando pra pagar. Solução: Com self-checkout no celular, cada cliente escaneia o QR da mesa e paga na hora. Resultado: Pagou no celular, liberou a mesa, adeus confusão. Quer ver isso no seu bar? Agende uma demo.",
  },
  {
    id: 3,
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=340&fit=crop",
    badge: "Conta",
    badgeColor: "bg-amber-light text-amber",
    title: "Quem consumiu o quê? Aqui não vira briga.",
    description: "Cada pessoa da mesa vê e paga só o que consumiu — sem discussão.",
    hook: "Confusão pra fechar a conta?",
    transcription: "Gancho: Confusão pra fechar conta? Problema: O grupo não sabe quem pediu o quê, começa a discussão. Solução: No SmartData, cada pessoa tem sua sessão. Vê o que pediu e paga só o seu. Resultado: Divisão automática, sem briga, cliente feliz. Agende uma demo.",
  },
  {
    id: 4,
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=340&fit=crop",
    badge: "Cozinha",
    badgeColor: "bg-teal-light text-teal",
    title: "Pedido não some. A cozinha vê tudo em tempo real.",
    description: "KDS por estação + status: recebido, em preparo, pronto.",
    hook: "Pedido perdido ou demora na cozinha?",
    transcription: "Gancho: Pedido perdido ou demora na cozinha? Problema: Comanda sumiu, cliente esperando, cozinha perdida. Solução: KDS por estação mostra tudo em tempo real. Status: recebido, em preparo, pronto. Resultado: Zero pedido perdido, cozinha ágil, cliente satisfeito. Agende uma demo.",
  },
  {
    id: 5,
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=340&fit=crop",
    badge: "Multilíngue",
    badgeColor: "bg-coral-light text-coral",
    title: "Turista entende, pede mais e reclama menos.",
    description: "Cardápio multilíngue + descrição traduzida automaticamente.",
    hook: "Turista não entende o cardápio?",
    transcription: "Gancho: Turista não entende o cardápio? Problema: Ele aponta pro prato errado, reclama que não era isso. Solução: Cardápio multilíngue com descrição traduzida automaticamente. Resultado: Turista entende, pede certo, gasta mais e não reclama. Agende uma demo.",
  },
  {
    id: 6,
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&h=340&fit=crop",
    badge: "Retenção",
    badgeColor: "bg-emerald-light text-emerald",
    title: "Cliente sumiu? A gente traz ele de volta.",
    description: "Push + voucher + campanhas (e você ainda detecta app inativo).",
    hook: "Cliente nunca mais voltou?",
    transcription: "Gancho: Cliente sumiu e nunca mais voltou? Problema: Você não sabe quem parou de vir, não tem como reconquistar. Solução: SmartData detecta cliente inativo e dispara push com voucher personalizado. Resultado: Cliente volta, reativa o relacionamento, você fatura mais. Agende uma demo.",
  },
];

export function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge-tag mx-auto mb-4">
            <span className="text-lg">🎬</span>
            <span>Veja na prática</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Veja o SmartData em ação
            <span className="text-gradient block">em 60 segundos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Problemas reais, soluções rápidas. Assista como cada dor do dia a dia 
            do seu bar ou restaurante simplesmente desaparece.
          </p>
        </div>

        {/* Video Carousel */}
        <div className="relative px-4 lg:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {videos.map((video) => (
                <CarouselItem key={video.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="feature-card group h-full flex flex-col">
                    {/* Thumbnail */}
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Overlay with hook text */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                        <p className="text-white font-bold text-lg leading-tight drop-shadow-lg">
                          {video.hook}
                        </p>
                      </div>
                      {/* Play button */}
                      <button
                        onClick={() => setSelectedVideo(video)}
                        className="absolute inset-0 flex items-center justify-center group/play"
                        aria-label={`Assistir: ${video.title}`}
                      >
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-accent transition-transform duration-300 group-hover/play:scale-110">
                          <Play className="w-7 h-7 text-accent-foreground ml-1" fill="currentColor" />
                        </div>
                      </button>
                      {/* Badge */}
                      <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${video.badgeColor}`}>
                        {video.badge}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="font-bold text-foreground text-lg mb-2 leading-tight">
                        {video.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">
                        {video.description}
                      </p>

                      {/* Transcription (collapsible for SEO) */}
                      <Accordion type="single" collapsible className="mb-4">
                        <AccordionItem value="transcription" className="border-none">
                          <AccordionTrigger className="text-xs text-muted-foreground hover:text-foreground py-2 hover:no-underline">
                            Ver transcrição (acessibilidade)
                          </AccordionTrigger>
                          <AccordionContent className="text-xs text-muted-foreground leading-relaxed">
                            {video.transcription}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      {/* CTAs */}
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => setSelectedVideo(video)}
                          className="bg-accent hover:bg-coral-dark text-accent-foreground flex-1"
                        >
                          <Play className="w-4 h-4 mr-1" />
                          Assistir
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                        >
                          Quero isso
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex -left-4" />
            <CarouselNext className="hidden lg:flex -right-4" />
          </Carousel>

          {/* Mobile dots indicator hint */}
          <p className="text-center text-xs text-muted-foreground mt-4 lg:hidden">
            ← Arraste para ver mais →
          </p>
        </div>

        {/* Playlist CTA */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-3">
            Prefere ver tudo de uma vez?
          </p>
          <Button variant="outline" size="lg" className="font-semibold">
            <ExternalLink className="w-4 h-4 mr-2" />
            Ver playlist completa no YouTube
          </Button>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none">
          <DialogHeader className="sr-only">
            <DialogTitle>{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Fechar vídeo"
          >
            <X className="w-5 h-5" />
          </button>
          {selectedVideo && (
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
