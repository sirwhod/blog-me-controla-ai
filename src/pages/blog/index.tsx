import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function BlogPage() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
      <div className="flex min-h-screen flex-col items-center justify-center pt-48 p-8 pb-20 gap-16 sm:p-20">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="text-lg text-muted-foreground">Welcome to the Blog page!</p>
      </div>
    </div>
  );
}