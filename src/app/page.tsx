"use client"

import { useState } from "react"
import CustomConnectButton from "@/components/web3/CustomConnectButton"
import WalletInfo from "@/components/WalletInfo"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import EventList from "@/components/EventList"

// Define the Event type
type Event = {
  id: string
  title: string
  date: string
  image: string
}

export default function Home() {
  const [isConnected, setIsConnected] = useState(false)
  const [events, setEvents] = useState<Event[]>([])

  // Simulating the getFeaturedEvents function
  const getFeaturedEvents = async (): Promise<Event[]> => {
    // This would typically be an API call
    return [
      { id: "1", title: "Web3 Conference", date: "2023-08-15", image: "/placeholder.svg?height=300&width=400" },
      { id: "2", title: "Blockchain Workshop", date: "2023-09-01", image: "/placeholder.svg?height=300&width=400" },
      { id: "3", title: "NFT Art Exhibition", date: "2023-09-15", image: "/placeholder.svg?height=300&width=400" },
    ]
  }

  // Simulating the connection process
  const handleConnect = async () => {
    setIsConnected(true)
    const fetchedEvents = await getFeaturedEvents()
    setEvents(fetchedEvents)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="text-primary w-6 h-6" />
              <span className="text-primary font-semibold">Web3 Event Platform</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-8">
              <span className="animate-gradient-text">Experience Events</span>
              <br />
              <span className="text-white">in the Metaverse</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl">
              Welcome to the future of event ticketing. Secure, transparent, and unforgettable experiences powered by
              blockchain technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              {isConnected ? (
                <Link href="/events" className="gradient-border inline-block">
                  <span className="flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold hover-glow text-white">
                    Explore Events
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>
              ) : (
                <div onClick={handleConnect}>
                  <CustomConnectButton />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {isConnected && <WalletInfo />}

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "10K+", label: "Event Tickets" },
            { number: "5K+", label: "Active Users" },
            { number: "1M+", label: "TVL" },
          ].map((stat, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl text-center hover-glow">
              <div className="text-4xl font-bold mb-2 animate-gradient-text">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Events Section */}
      {isConnected && (
        <div className="container mx-auto px-4 py-20">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold animate-gradient-text">Featured Events</h2>
            <Link href="/events" className="text-primary flex items-center gap-2 hover:gap-3 transition-all">
              View All
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <EventList initialEvents={events} />
        </div>
      )}

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "NFT Tickets",
              description: "Unique digital collectibles that serve as your event access pass",
            },
            {
              title: "Secure Trading",
              description: "Safe and transparent ticket transfers on the blockchain",
            },
            {
              title: "Community Rewards",
              description: "Earn rewards for being an active member of our ecosystem",
            },
          ].map((feature, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl card-shine">
              <h3 className="text-xl font-semibold mb-4 text-primary">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

