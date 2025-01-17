"use client";

import Link from "next/link";
import CustomConnectButton from "@/components/web3/CustomConnectButton";

export default function Navbar() {
  return (
    <nav className="glass-effect sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            EventTix
          </Link>
          <div className="flex items-center gap-8">
            <Link 
              href="/events" 
              className="text-gray-300 hover:text-white transition-colors relative group"
            >
              Events
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/events/create" 
              className="gradient-border"
            >
              <span className="flex items-center justify-center px-4 py-2 bg-black text-white font-semibold rounded-lg hover-glow transition-all duration-300">
                Create Event
              </span>
            </Link>
            <CustomConnectButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
