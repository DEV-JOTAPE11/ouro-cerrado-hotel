import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Bed, Maximize } from "lucide-react";
import heroSuite from "@/assets/hero-suite.jpg";
import roomStandard from "@/assets/room-standard.jpg";
import roomFamily from "@/assets/room-family.jpg";

const accommodations = [
  {
    id: 1,
    name: "Suíte Premium",
    image: heroSuite,
    guests: "2 pessoas",
    beds: "1 cama king size",
    size: "45m²",
    price: "R$ 450",
    features: ["Vista panorâmica", "Banheira de hidromassagem", "Varanda privativa"],
  },
  {
    id: 2,
    name: "Quarto Standard",
    image: roomStandard,
    guests: "2 pessoas",
    beds: "1 cama queen size",
    size: "30m²",
    price: "R$ 280",
    features: ["Wi-Fi gratuito", "TV a cabo", "Ar-condicionado"],
  },
  {
    id: 3,
    name: "Quarto Família",
    image: roomFamily,
    guests: "4 pessoas",
    beds: "2 camas de casal",
    size: "50m²",
    price: "R$ 520",
    features: ["Espaço amplo", "Área de estar", "Ideal para famílias"],
  },
];

const Accommodations = () => {
  return (
    <section id="acomodacoes" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossas Acomodações
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Conforto e Elegância em Cada Detalhe
          </h2>
          <p className="text-lg text-muted-foreground">
            Escolha a acomodação perfeita para sua estadia e desfrute de momentos únicos
          </p>
        </div>

        {/* Accommodation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((room, index) => (
            <Card 
              key={room.id} 
              className="overflow-hidden hover-lift shadow-card border-none group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold">
                  {room.price}/noite
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{room.name}</h3>

                {/* Info Icons */}
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{room.guests}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="h-4 w-4 text-primary" />
                    <span>{room.beds}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize className="h-4 w-4 text-primary" />
                    <span>{room.size}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {room.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button variant="secondary" className="w-full" asChild>
                  <a href="#contato">Reservar Esta Suíte</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
