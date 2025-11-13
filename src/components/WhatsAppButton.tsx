import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5538999248203";
  const message = "Olá! Gostaria de fazer uma reserva no Ouro do Cerrado Hotel.";

  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full shadow-luxury flex items-center justify-center group transition-all duration-300 hover:scale-110 animate-bounce"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
      <span className="absolute right-16 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco!
      </span>
    </button>
  );
};

export default WhatsAppButton;
