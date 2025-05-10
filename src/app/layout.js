import { Outfit } from "next/font/google";
import "./globals.css";
const font = Outfit({ subsets: ["latin"], });

export const metadata = {
  title: "Logistics",
  description: "Logistics Software",
};

export default function MainRootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
