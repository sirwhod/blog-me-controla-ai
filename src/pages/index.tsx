import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

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
   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-4xl text-red-400">Title</h1>
   </div>
  );
}
