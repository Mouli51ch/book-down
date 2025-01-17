"use client";

import { useState } from "react";

interface WalletHook {
  connected: boolean;
  connecting: boolean;
  address: string | null;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

export function useWallet(): WalletHook {
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [address, setAddress] = useState<string | null>(null);

  const connect = async () => {
    try {
      setConnecting(true);
      // Here you would normally add wallet connection logic
      setConnected(true);
      setAddress("0x0000000000000000000000000000000000000000");
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    } finally {
      setConnecting(false);
    }
  };

  const disconnect = async () => {
    setConnected(false);
    setAddress(null);
  };

  return {
    connected,
    connecting,
    address,
    connect,
    disconnect
  };
}
