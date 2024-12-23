import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={playfair.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
