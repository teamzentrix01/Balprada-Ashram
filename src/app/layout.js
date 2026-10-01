import "./globals.css";
import Footer from "./_components/Footer";
import AppointmentPopup from "./_components/AppointmentPopup";
import FloatingWhatsApp from "./_components/FloatingWhatsApp";
import Header from "./_components/Header";
import Script from "next/script";

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

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P8PMT0MYCL"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-P8PMT0MYCL');
          `}
        </Script>
      </body>
    </html>
  );
}