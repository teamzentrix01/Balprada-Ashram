import "./globals.css";
import Footer from "./_components/Footer";
import AppointmentPopup from "./_components/AppointmentPopup";
import FloatingWhatsApp from "./_components/FloatingWhatsApp";
import Header from "./_components/Header";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.balpradaindia.com"),
};

export const viewport = {
  themeColor: "#18362a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Hxeu8I3te-TbPis_eIp4CEI_zVh7aIMZUru5jJCEytQ"
        />
        {/* Preconnect to external asset CDNs to eliminate DNS lookup latency */}
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
      </head>

      <body>
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <AppointmentPopup />

        {/* Google Analytics - deferred with lazyOnload to unblock First Contentful Paint & Main Thread */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P8PMT0MYCL"
          strategy="lazyOnload"
        />

        <Script id="google-analytics" strategy="lazyOnload">
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