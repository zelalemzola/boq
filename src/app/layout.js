import { Outfit } from "next/font/google";
import "./globals.css";


const inter = Outfit({ subsets: ["latin"] });


export const metadata = {
  title: "BOQ Professionals",
  description: "BOQ Professionals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
