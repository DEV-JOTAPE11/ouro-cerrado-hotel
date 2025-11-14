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
    cpf: "", // NOVO
    cep: "", // NOVO (substitui 'address')
    rua: "", // NOVO
    numero: "", // NOVO
    bairro: "", // NOVO
    cidade: "", // NOVO
    estado: "", // NOVO
    module: "", // Já está aqui (para modalidade)
    dataCheckin: "", // Mudei de 'data' para ser mais específico
    dataCheckout: "",
    occupancy: "", // Mudei de 'data' para ser mais específico
    message: "",
  });

  const handleSubmit = () => {
    // Construct WhatsApp message
    const message = `Olá! Gostaria de fazer uma reserva.
    Nome: ${formData.name}
    Email: ${formData.email}
    Telefone: ${formData.phone}
    CEP: ${formData.cep || "Não informado"}
    Rua: ${formData.rua || "Não informado"}
    Número: ${formData.numero || "Não informado"}
    Bairro: ${formData.bairro || "Não informado"}
    Cidade: ${formData.cidade || "Não informado"}
    Estado: ${formData.estado || "Não informado"}
    Quarto: ${formData.module}
    Ocupação: ${formData.occupancy}
    Check-in: ${formData.dataCheckin}
    Check-out: ${formData.dataCheckout}

    Mensagem: ${formData.message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5538999248203&text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    toast.success("Redirecionando para WhatsApp...");

    setFormData({
      name: "",
      email: "",
      phone: "",
      cpf: "",
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
      module: "",
      dataCheckin: "",
      dataCheckout: "",
      occupancy: "",
      message: "",
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
            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Seu telefone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="h-12"
                />
              </div>

              <div>
                <Input
                  placeholder="Seu CPF"
                  value={formData.cpf}
                  onChange={(e) =>
                    setFormData({ ...formData, cpf: e.target.value })
                  }
                  required
                  className="h-12"
                />
              </div>

              <label className="text-sm text-muted-foreground ml-1 -mb-4 block">
                Endereço:
              </label>
              <div>
                <Input
                  placeholder="CEP"
                  value={formData.cep}
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, cep: e.target.value })
                  }
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  placeholder="Rua / Avenida"
                  value={formData.rua}
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, rua: e.target.value })
                  }
                  className="h-12"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Número (Casa/Apto)"
                    value={formData.numero}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, numero: e.target.value })
                    }
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Bairro"
                    value={formData.bairro}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, bairro: e.target.value })
                    }
                    className="h-12"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Cidade"
                    value={formData.cidade}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, cidade: e.target.value })
                    }
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Estado (ex: MG)"
                    value={formData.estado}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, estado: e.target.value })
                      
                    }
                    className="h-12"
                  />
                </div>
              </div>

              {/* 👇 CAMPO MODALIDADE (NOVO, como <select>) 👇 */}
              <div>
                {/* Eu usei um <select> aqui para melhor experiência.
                      Adicionei classes do Tailwind para se parecer com seu <Input>.
                    */}
                <select
                  value={formData.module}
                  onChange={(e) =>
                    setFormData({ ...formData, module: e.target.value })
                  }
                  required
                  className="w-full h-12 rounded-md border border-input bg-transparent px-3 py-2 text-sm text-muted-foreground"
                >
                  <option value="" disabled>
                    Selecione o tipo de quarto
                  </option>
                  {/* Você deve listar os quartos que você criou no array accommodations */}
                  <option value="Suíte Super Luxo" translate="no" className="notranslate">Suíte Super Luxo</option>
                  <option value="Suite família com ar" translate="no" className="notranslate">
                    Suite família com ar
                  </option>
                  <option value="Luxo executivo com ar e frigobar" translate="no" className="notranslate">
                    Luxo executivo com ar e frigobar
                  </option>
                  <option value="Master triplo com ar" translate="no" className="notranslate">
                    Master triplo com ar
                  </option>
                  <option value="Master triplo com ar" translate="no" className="notranslate">
                    Master Executivo com ar e frigobar
                  </option>

                  <option value="Master com ar" translate="no" className="notranslate">Master com ar</option>
                  <option value="Master executivo" translate="no" className="notranslate">Master executivo</option>
                   <option value="Standart com Ventilador de teto" translate="no" className="notranslate">
                    Standart com Ventilador de teto
                  </option>
                </select>
              </div>

              {/* 2. ADICIONADO NOVO CAMPO DE OCUPAÇÃO (RÁDIO) */}
              <div>
                <label className="text-sm text-muted-foreground ml-1">
                  Tipo de Ocupação
                </label>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 h-auto md:h-12 py-2">
                  {/* Opção 1: Individual */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="individual"
                      name="occupancy" // 'name' igual agrupa os botões
                      value="Individual"
                      checked={formData.occupancy === "Individual"}
                      onChange={(e) =>
                        setFormData({ ...formData, occupancy: e.target.value })
                      }
                      required
                      className="h-4 w-4"
                    />
                    <label htmlFor="individual" className="text-sm">
                      Individual
                    </label>
                  </div>

                  {/* Opção 2: Casal */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="casal"
                      name="occupancy"
                      value="Casal"
                      checked={formData.occupancy === "Casal"}
                      onChange={(e) =>
                        setFormData({ ...formData, occupancy: e.target.value })
                      }
                      required
                      className="h-4 w-4"
                    />
                    <label htmlFor="casal" className="text-sm">
                      Casal
                    </label>
                  </div>

                  {/* Opção 3: Triplo */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="triplo"
                      name="occupancy"
                      value="Triplo"
                      checked={formData.occupancy === "Triplo"}
                      onChange={(e) =>
                        setFormData({ ...formData, occupancy: e.target.value })
                      }
                      required
                      className="h-4 w-4"
                    />
                    <label htmlFor="triplo" className="text-sm">
                      Triplo
                    </label>
                  </div>

                  {/* Opção 4: Quádruplo */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="quadruplo"
                      name="occupancy"
                      value="Quádruplo"
                      checked={formData.occupancy === "Quádruplo"}
                      onChange={(e) =>
                        setFormData({ ...formData, occupancy: e.target.value })
                      }
                      required
                      className="h-4 w-4"
                    />
                    <label htmlFor="quadruplo" className="text-sm">
                      Quádruplo
                    </label>
                  </div>
                </div>
              </div>

              {/* 👇 CAMPOS DE DATA (NOVOS) 👇 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground ml-1">
                    Check-in
                  </label>
                  <Input
                    type="date"
                    value={formData.dataCheckin}
                    onChange={(e) =>
                      setFormData({ ...formData, dataCheckin: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground ml-1">
                    Check-out
                  </label>
                  <Input
                    type="date"
                    value={formData.dataCheckout}
                    onChange={(e) =>
                      setFormData({ ...formData, dataCheckout: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <Textarea
                  placeholder="Sua mensagem (datas desejadas, número de hóspedes, etc.)"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="resize-none"
                />
              </div>
              <Button
                type="button"
                onClick={handleSubmit}
                variant="secondary"
                size="lg"
                className="w-full"
              >
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
                    R. Juscelino Kubitscheck, 1060 - Planalto, Buritis - MG,
                    38660-000
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
                  <p className="text-muted-foreground">(38) 99924-8203</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Horário de Check-in
                  </h3>
                  <p className="text-muted-foreground">
                    Check-in: 13h00
                    <br />
                    Check-out: 12h00
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-card h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.279505541775!2d-46.42932612411607!3d-15.630097618932535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9356b305f48a343f%3A0xe3dcce9676d90e9a!2sHotel%20Ouro%20do%20Cerrado%20Buritis!5e0!3m2!1spt-BR!2sbr!4v1763047220356!5m2!1spt-BR!2sbr"
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
