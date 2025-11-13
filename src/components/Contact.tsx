import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "", // Já está aqui
    module: "",  // Já está aqui (para modalidade)
    dataCheckin: "", // Mudei de 'data' para ser mais específico
    dataCheckout: "", // Mudei de 'data' para ser mais específico
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `Olá! Gostaria de fazer uma reserva.\n\nNome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone} Endereço: ${formData.address || 'Não informado'}
    \nQuarto: ${formData.module}
    \nCheck-in: ${formData.dataCheckin}
    \nCheck-out: ${formData.dataCheckout}\nMensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5538999999999?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast.success("Redirecionando para WhatsApp...");
    
    setFormData({ 
      name: "", 
      email: "", 
      phone: "", 
      address: "", 
      module: "", 
      dataCheckin: "", 
      dataCheckout: "", 
      message: "" 
    });
  };

  return (
    <section id="contato" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Faça Sua Reserva
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para recebê-lo. Entre em contato conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Seu telefone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
               <Input
                  placeholder="Seu Endereço (opcional)"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData,         address: e.target.value })}
                 className="h-12"
                />
            </div>

                  {/* 👇 CAMPO MODALIDADE (NOVO, como <select>) 👇 */}
                  <div>
                    {/* Eu usei um <select> aqui para melhor experiência.
                      Adicionei classes do Tailwind para se parecer com seu <Input>.
                    */}
                    <select
                      value={formData.module}
                      onChange={(e) => setFormData({ ...formData, module: e.target.value })}
                      required
                      className="w-full h-12 rounded-md border border-input bg-transparent px-3 py-2 text-sm text-muted-foreground"
                    >
                      <option value="" disabled>Selecione o tipo de quarto</option>
                      {/* Você deve listar os quartos que você criou no array accommodations */}
                      <option value="Suíte Super Luxo">Suíte Super Luxo</option>
                      <option value="Suite família com ar">Suite família com ar</option>
                      <option value="Luxo executivo com ar e frigobar">Luxo executivo com ar e frigobar</option>
                      <option value="Master triplo com ar">Master triplo com ar</option>
                      <option value="Master triplo com ar">Master Executivo com ar e frigobar</option>
                      <option value="Master com ar">Master com ar</option>
                      <option value="Master executivo">Master executivo</option>
                    </select>
                  </div>

                  {/* 👇 CAMPOS DE DATA (NOVOS) 👇 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground ml-1">Check-in</label>
                      <Input
                        type="date"
                        value={formData.dataCheckin}
                        onChange={(e) => setFormData({ ...formData, dataCheckin: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground ml-1">Check-out</label>
                      <Input
                        type="date"
                        value={formData.dataCheckout}
                        onChange={(e) => setFormData({ ...formData, dataCheckout: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

              <div>
                <Textarea
                  placeholder="Sua mensagem (datas desejadas, número de hóspedes, etc.)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="resize-none"
                />
              </div>
              <Button type="submit" variant="secondary" size="lg" className="w-full">
                Enviar Mensagem via WhatsApp
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8 animate-fade-in">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Av Garibaldina Fernandes Valadares<br />
                    Primavera 1, Arinos - MG, 38680-000
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Telefone</h3>
                  <p className="text-muted-foreground">(38) 99999-9999</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">E-mail</h3>
                  <p className="text-muted-foreground">contato@ourodocerrado.com.br</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Horário de Check-in</h3>
                  <p className="text-muted-foreground">
                    Check-in: 14h00<br />
                    Check-out: 12h00
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-card h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.5!2d-46.1!3d-15.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDU0JzAwLjAiUyA0NsKwMDYnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Localização do Ouro do Cerrado Hotel"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
