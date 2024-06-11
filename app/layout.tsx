import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Osama Alam",
  description:
    "Elevate your business with Osama Alam a versatile full stack developer, AI developer, and chatbot developer. As a Full Stack Developer, I specialize in creating responsive websites, advanced AI solutions, and intelligent chatbots that enhance user experience and drive conversions. With a commitment to excellence and innovation, I deliver tailored solutions to meet your unique needs. Partner with me to transform your digital presence, streamline operations, and stay ahead of the competition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
