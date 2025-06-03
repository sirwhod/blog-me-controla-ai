import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
   <div className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
    <Header />
    <div className="flex min-h-screen flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-3xl font-bold">Início</h1>
      <p className="text-lg text-muted-foreground">Welcome to the início page!</p>
    </div>
   </div>
  );
}
