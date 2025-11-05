import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    location: "Belo Horizonte, MG",
    rating: 5,
    comment:
      "Experiência incrível! O hotel é maravilhoso, quartos limpos e confortáveis. O café da manhã é espetacular. Com certeza voltaremos!",
    date: "Janeiro 2025",
  },
  {
    id: 2,
    name: "João Santos",
    location: "Brasília, DF",
    rating: 5,
    comment:
      "Atendimento impecável e instalações de primeira. A hospitalidade da equipe faz toda a diferença. Recomendo muito!",
    date: "Dezembro 2024",
  },
  {
    id: 3,
    name: "Ana Costa",
    location: "São Paulo, SP",
    rating: 5,
    comment:
      "Hotel aconchegante e bem localizado. Perfeito para uma estadia relaxante. As acomodações são elegantes e muito confortáveis.",
    date: "Novembro 2024",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            O Que Nossos Hóspedes Dizem
          </h2>
          <p className="text-lg text-muted-foreground">
            Confira a experiência de quem já se hospedou conosco
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="shadow-card border-none animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.comment}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {testimonial.date}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
