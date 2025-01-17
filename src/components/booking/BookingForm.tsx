"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useWallet } from "@/hooks/useWallet";
import { type Event } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

interface BookingFormProps {
  event: Event;
}

export default function BookingForm({ event }: BookingFormProps) {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { connected, connecting, connect } = useWallet();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!connected) {
      await connect();
      return;
    }

    try {
      setIsLoading(true);
      // Add booking logic here
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Booking successful!");
      router.push(`/ticket/mock-ticket-id`);
    } catch (error) {
      console.error("Booking failed:", error);
      toast.error("Failed to book ticket. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glass-card p-6 rounded-2xl">
      <h3 className="text-xl font-semibold mb-6 animate-gradient-text">Book Tickets</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Number of Tickets
          </label>
          <Input
            type="number"
            min="1"
            max="10"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="bg-gray-900 border-gray-800"
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Price per ticket</span>
            <span className="text-gray-300">{event.price} ETH</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Quantity</span>
            <span className="text-gray-300">{quantity}</span>
          </div>
          <div className="border-t border-gray-800 my-2"></div>
          <div className="flex justify-between font-semibold">
            <span className="text-gray-300">Total</span>
            <span className="text-primary">{(event.price * quantity).toFixed(3)} ETH</span>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-black font-semibold"
          disabled={isLoading || connecting}
        >
          <span className="flex items-center justify-center gap-2">
            {isLoading ? "Processing..." : connecting ? "Connecting Wallet..." : connected ? "Book Now" : "Connect Wallet"}
            {!isLoading && !connecting && <ArrowRight className="w-4 h-4" />}
          </span>
        </Button>
      </form>
    </div>
  );
}
