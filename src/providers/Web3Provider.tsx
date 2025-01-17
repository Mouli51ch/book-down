"use client";

import React, { useEffect } from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { useAccount } from "wagmi";
import { Chain } from "viem";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

// Define Xion Network
const xionNetwork: Chain = {
  id: 37111, // Replace with actual Xion chain ID
  name: "Xion Network",
  nativeCurrency: {
    decimals: 18,
    name: "XION",
    symbol: "XION",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.xion-testnet-1.burnt.com:443"]
    },
    public: {
      http: ["https://rpc.xion-testnet-1.burnt.com:443"]
    }
  },
  blockExplorers: {
    default: {
      name: "Xion Explorer",
      url: "https://explorer.xion-testnet-1.burnt.com"
    }
  },
  testnet: true
};

// Connection Monitor Component
function ConnectionMonitor() {
  const { isConnected, address, chain } = useAccount();

  useEffect(() => {
    console.log("Wallet Connection Status:", {
      isConnected,
      address,
      chainId: chain?.id,
      chainName: chain?.name
    });
  }, [isConnected, address, chain]);

  return null;
}

// Query Client Configuration
const queryClient = new QueryClient();

// Wagmi Configuration
const config = createConfig(
  getDefaultConfig({
    // Chain Configuration
    chains: [xionNetwork],
    transports: {
      [xionNetwork.id]: http("https://rpc.xion-testnet-1.burnt.com:443"),
    },

    // WalletConnect Configuration
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,

    // Application Metadata
    appName: "EventTix",
    appDescription: "Web3 Event Ticketing Platform",
    appUrl: "https://eventtix.com", // Replace with your actual domain
    appIcon: "/logo.png", // Add your logo to public directory
  }),
);

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider
          customTheme={{
            "--ck-font-family": "var(--font-montserrat)",
            "--ck-border-radius": "1rem",
            "--ck-primary-button-background": "var(--primary)",
            "--ck-primary-button-hover-background": "var(--primary-foreground)",
            "--ck-body-background": "#000",
            "--ck-body-color": "#fff",
            "--ck-secondary-button-background": "rgba(255, 255, 255, 0.1)",
            "--ck-secondary-button-hover-background": "rgba(255, 255, 255, 0.2)",
          }}
          mode="dark"
          options={{
            hideBalance: false,
            hideTooltips: false,
            hideQuestionMarkCTA: false,
            enforceSupportedChains: true,
            initialChainId: xionNetwork.id
          }}
        >
          <ConnectionMonitor />
          {children}
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
