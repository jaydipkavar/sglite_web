export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9016543212" // your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-50 bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 flex items-center justify-center"
    >
      <img
        src="/images/whatsapp-icon.png" // path to your WhatsApp image
        alt="WhatsApp"
        className="w-6 h-6"
      />
    </a>
  );
}
