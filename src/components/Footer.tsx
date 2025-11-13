import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logoDoHotel from '@/assets/Logo_ouro_cerrado.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img
               src={logoDoHotel}
              alt="Logo Ouro do Cerrado Hotel"
              className="h-auto w-40"
            />
            {/* Use as classes 'className' do Tailwind para ajustar o tamanho.
    'h-10' = altura (ex: 10 unidades = 40px)
    'w-auto' = largura automática para manter a proporção
  */}
            <p className="text-background/80">
              Sua estadia inesquecível em Arinos-MG. Conforto, elegância e hospitalidade.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-background/80 hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-background/80 hover:text-primary transition-colors">
                  O Hotel
                </a>
              </li>
              <li>
                <a href="#acomodacoes" className="text-background/80 hover:text-primary transition-colors">
                  Acomodações
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-background/80 hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-background/80 hover:text-primary transition-colors">
                  Galeria
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-background/80">
              <li>Café da Manhã Completo</li>
              <li>Wi-Fi Gratuito</li>
              <li>Estacionamento</li>
              <li>Serviço de Quarto</li>
              <li>TV a Cabo</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-background/80">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  R. Juscelino Kubitscheck,<br /> 1060 - Planalto, Buritis - MG, 38660-000
                  
                </span>
              </li>
              <li className="flex gap-3 text-background/80">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">(38) 99924-8203</span>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-8 pt-8 text-center text-background/60 text-sm">
          <p>© {currentYear} Ouro do Cerrado Hotel. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
