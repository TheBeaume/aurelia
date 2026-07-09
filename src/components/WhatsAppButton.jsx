import { FaWhatsapp } from "react-icons/fa";
import siteConfig from "../data/siteConfig";

function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full shadow-2xl transition duration-300 hover:scale-110"
      style={{
        background: "#25D366",
        color: "#fff",
      }}
    >
      <FaWhatsapp size={34} />
    </a>
  );
}

export default WhatsAppButton;
