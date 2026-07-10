import "./globals.css";

export const metadata = {
  title: "Balprada India | Ayurvedic Chikitsalaya & Jansewa Ashram",
  description:
    "Balprada Jansewa Ashram Trust, Ayurvedic Chikitsalaya and Research Centre in Moradabad, Uttar Pradesh.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
