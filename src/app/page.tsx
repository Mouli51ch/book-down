import { Suspense } from "react";
import Link from "next/link";
import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "@/lib/api/events";
import { ArrowRight, Sparkles } from "lucide-react";

export default async function Home() {
  const events = await getFeaturedEvents();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
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
              Welcome to the future of event ticketing. Secure, transparent, and unforgettable 
              experiences powered by blockchain technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/events"
                className="gradient-border inline-block"
              >
                <span className="flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold hover-glow">
                  Explore Events
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

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
      <div className="container mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold animate-gradient-text">Featured Events</h2>
          <Link 
            href="/events" 
            className="text-primary flex items-center gap-2 hover:gap-3 transition-all"
          >
            View All 
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <Suspense fallback={<EventsLoadingPlaceholder />}>
          <EventList initialEvents={events} />
        </Suspense>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "NFT Tickets",
              description: "Unique digital collectibles that serve as your event access pass"
            },
            {
              title: "Secure Trading",
              description: "Safe and transparent ticket transfers on the blockchain"
            },
            {
              title: "Community Rewards",
              description: "Earn rewards for being an active member of our ecosystem"
            }
          ].map((feature, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl card-shine">
              <h3 className="text-xl font-semibold mb-4 text-primary">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EventsLoadingPlaceholder() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="glass-card rounded-2xl h-96 animate-pulse">
          <div className="h-48 bg-gray-800 rounded-t-2xl"></div>
          <div className="p-6 space-y-4">
            <div className="h-6 bg-gray-800 rounded w-3/4"></div>
            <div className="h-4 bg-gray-800 rounded w-1/2"></div>
            <div className="h-4 bg-gray-800 rounded w-2/3"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
