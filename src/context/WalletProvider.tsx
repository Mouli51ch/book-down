// "use client";

// import { createContext, useEffect, useState } from "react";
// import { ethers } from "ethers";
// import type { WalletState } from "@/types";

// export const WalletContext = createContext<WalletState | null>(null);

// export function WalletProvider({ children }: { children: React.ReactNode }) {
//   const [address, setAddress] = useState<string | null>(null);
//   const [connected, setConnected] = useState(false);

//   const connect = async () => {
//     try {
//       if (typeof window.ethereum !== "undefined") {
//         const provider = new ethers.BrowserProvider(window.ethereum);
//         const accounts = await provider.send("eth_requestAccounts", []);
//         setAddress(accounts[0]);
//         setConnected(true);
//       } else {
//         alert("Please install MetaMask!");
//       }
//     } catch (error) {
//       console.error("Failed to connect wallet:", error);
//     }
//   };

//   const disconnect = async () => {
//     setAddress(null);
//     setConnected(false);
//   };

//   useEffect(() => {
//     // Check if wallet is already connected
//     if (typeof window.ethereum !== "undefined") {
//       const checkConnection = async () => {
//         const provider = new ethers.BrowserProvider(window.ethereum);
//         const accounts = await provider.listAccounts();
//         if (accounts.length > 0) {
//           setAddress(accounts[0].address);
//           setConnected(true);
//         }
//       };
//       checkConnection();
//     }
//   }, []);

//   return (
//     <WalletContext.Provider value={{ connected, address, connect, disconnect }}>
//       {children}
//     </WalletContext.Provider>
//   );
// }
