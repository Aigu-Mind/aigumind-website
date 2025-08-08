import "./globals.css";

export const metadata = {
  title: "Aigumind - AI-Powered Platform",
  description: "Your AI-powered platform for intelligent solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
