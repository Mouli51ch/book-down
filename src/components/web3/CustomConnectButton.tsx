"use client"

import { useState } from "react"
import { Wallet } from "lucide-react"

export default function CustomConnectButton() {
  const [isConnected, setIsConnected] = useState(false)
  const mockAddress = "0x1234...5678"

  const handleClick = () => {
    setIsConnected(true)
  }

  return (
    <button onClick={handleClick} className="relative group flex items-center gap-2 gradient-border">
      <span className="flex items-center justify-center gap-2 px-4 py-2 font-semibold hover-glow bg-primary rounded-lg transition-all duration-300">
        {isConnected ? (
          <>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-primary-foreground">{mockAddress}</span>
          </>
        ) : (
          <>
            <Wallet className="w-4 h-4 text-primary-foreground" />
            <span className="text-primary-foreground">Connect Wallet</span>
          </>
        )}
      </span>
    </button>
  )
}

