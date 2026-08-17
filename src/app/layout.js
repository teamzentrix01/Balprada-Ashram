import "./globals.css";
import AppointmentPopup from "./_components/AppointmentPopup";
import { FloatingWhatsApp } from "./_components/SiteChrome";

export const metadata = {
  title: "Balprada Ayurvedic Hospital & Research Center",
  description:
    "Balprada Ayurvedic Hospital & Research Center in Moradabad, Uttar Pradesh, backed by 35 years of trusted care.",
  icons: {
    icon: [{ url: "/icon.png?v=balprada-logo-2", type: "image/png" }],
    shortcut: "/icon.png?v=balprada-logo-2",
    apple: "/icon.png?v=balprada-logo-2",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body>
        {children}
        <FloatingWhatsApp />
        <AppointmentPopup />
      </body>
    </html>
  );
}
