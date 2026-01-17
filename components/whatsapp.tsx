import Image from "next/image"

export default function WhatsApp() {
  return (
    <div className="fixed bottom-8 left-8 z-40">
      <a
        href="https://wa.me/+48730953744"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition duration-300 hover:scale-110 transform overflow-hidden"
        aria-label="Contact us on WhatsApp"
      >
        <Image src="/whatsapp-icon.png" alt="WhatsApp" width={64} height={64} className="w-full h-full object-cover" />
      </a>
    </div>
  )
}
