import { Coffee, Wifi, Car, UtensilsCrossed, Tv, Wind } from "lucide-react";
import breakfastImage from "@/assets/breakfast.jpg";

const services = [
  {
    icon: Coffee,
    title: "Café da Manhã Completo",
    description: "Buffet com produtos frescos e regionais todas as manhãs",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Gratuito",
    description: "Internet de alta velocidade em todas as áreas do hotel",
  },
  {
    icon: Car,
    title: "Estacionamento",
    description: "Vagas gratuitas e seguras para todos os hóspedes",
  },
  {
    icon: UtensilsCrossed,
    title: "Serviço de Quarto",
    description: "Disponível para seu conforto e comodidade",
  },
  {
    icon: Tv,
    title: "TV a Cabo",
    description: "Canais nacionais e internacionais em todos os quartos",
  },
  {
    icon: Wind,
    title: "Ar-Condicionado",
    description: "Climatização individual para seu conforto total",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Comodidades & Serviços
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                Tudo para Seu Conforto
              </h2>
              <p className="text-lg text-muted-foreground">
                Oferecemos uma ampla gama de serviços para tornar sua estadia ainda mais agradável e memorável
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="flex gap-4 group animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in lg:order-first">
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <img
                src={breakfastImage}
                alt="Café da manhã do hotel"
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
