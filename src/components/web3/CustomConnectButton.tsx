"use client";

import { ConnectKitButton } from "connectkit";
import { Wallet } from "lucide-react";

export default function CustomConnectButton() {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, address, ensName }) => {
        return (
          <button
            onClick={show}
            className="relative group flex items-center gap-2 gradient-border"
          >
            <span className="flex items-center justify-center gap-2 px-4 py-2 font-semibold hover-glow bg-black rounded-lg transition-all duration-300">
              {isConnected ? (
                <>
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-white">
                    {ensName || `${address?.slice(0, 6)}...${address?.slice(-4)}`}
                  </span>
                </>
              ) : isConnecting ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-white">Connecting...</span>
                </>
              ) : (
                <>
                  <Wallet className="w-4 h-4 text-primary" />
                  <span className="text-white">Connect Wallet</span>
                </>
              )}
            </span>
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
}
