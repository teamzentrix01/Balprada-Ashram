"use client";

import { MessageCircle } from "lucide-react";
import { site } from "../data";

export function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={site.appointmentUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`WhatsApp main branch on ${site.primaryPhone}`}
      title={`WhatsApp ${site.primaryPhone}`}
    >
      <MessageCircle size={27} strokeWidth={2.2} aria-hidden="true" />
    </a>
  );
}

export default FloatingWhatsApp;
