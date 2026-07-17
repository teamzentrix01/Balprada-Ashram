import "./globals.css";
import AppointmentPopup from "./_components/AppointmentPopup";

export const metadata = {
  title: "Balprada Ayurvedic Hospital & Research Center",
  description:
    "Balprada Ayurvedic Hospital & Research Center in Moradabad, Uttar Pradesh, backed by 35 years of trusted care.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body>
        {children}
        <AppointmentPopup />
      </body>
    </html>
  );
}
