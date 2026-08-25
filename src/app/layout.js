import "./globals.css";
import Footer from "./_components/Footer";
import AppointmentPopup from "./_components/AppointmentPopup";
import FloatingWhatsApp from "./_components/FloatingWhatsApp";
import Header from "./_components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Hxeu8I3te-TbPis_eIp4CEI_zVh7aIMZUru5jJCEytQ"
        />
      </head>

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