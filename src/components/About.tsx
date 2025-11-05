import hotelExterior from "@/assets/hotel-exterior.jpg";

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-slide-in">
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <img
                src={hotelExterior}
                alt="Fachada do Ouro do Cerrado Hotel"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Sobre Nós
              </span>
              <div className="h-1 w-20 bg-primary mt-2 rounded-full" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Bem-vindo ao{" "}
              <span className="text-gradient-gold">Ouro do Cerrado</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Localizado no coração de Arinos-MG, o Ouro do Cerrado Hotel oferece 
              uma experiência única de hospedagem, onde conforto, elegância e 
              hospitalidade se encontram.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa missão é proporcionar momentos inesquecíveis aos nossos hóspedes, 
              com acomodações modernas, serviços de excelência e um atendimento 
              personalizado que faz toda a diferença.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground mt-1">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Hóspedes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.8</div>
                <div className="text-sm text-muted-foreground mt-1">Avaliação Média</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
