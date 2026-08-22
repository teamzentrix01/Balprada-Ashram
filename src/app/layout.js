import "./globals.css";
import Footer from "./_components/Footer";
import AppointmentPopup from "./_components/AppointmentPopup";
import FloatingWhatsApp from "./_components/FloatingWhatsApp";
import Header from "./_components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <AppointmentPopup />
      </body>
    </html>
  );
}
