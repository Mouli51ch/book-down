import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Ticket, Users, ArrowRight } from "lucide-react";
import { type Event } from "@/types";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const { id, name, date, location, price, imageUrl, category, capacity } = event;

  return (
    <div className="glass-card rounded-2xl overflow-hidden card-shine hover-glow">
      <div className="relative h-48 group">
        <Image
          src={imageUrl || "/api/placeholder/800/400"}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold glass-card">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold animate-gradient-text">{name}</h3>
        <div className="space-y-3 text-gray-300">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-primary" />
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            <span>{location}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Ticket className="w-4 h-4 mr-2 text-primary" />
              <span>{price} ETH</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-primary" />
              <span>{capacity} seats</span>
            </div>
          </div>
        </div>
        <Link
          href={`/events/${id}`}
          className="gradient-border block w-full mt-6"
        >
          <span className="flex items-center justify-center gap-2 py-3 text-center font-semibold hover:gap-3 transition-all">
            View Details
            <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
    </div>
  );
}
