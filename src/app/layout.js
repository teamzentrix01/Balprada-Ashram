import "./globals.css";
import AppointmentPopup from "./_components/AppointmentPopup";
import { FloatingWhatsApp } from "./_components/SiteChrome";



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
