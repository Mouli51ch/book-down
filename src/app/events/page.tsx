import { Suspense } from "react";
import { getAllEvents } from "@/lib/api/events";
import EventCard from "@/components/events/EventCard";
import { Card } from "@/components/ui/card";

export default async function EventsPage() {
  const events = await getAllEvents();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 animate-gradient-text">Discover Events</h1>
      <Suspense fallback={<EventsLoadingPlaceholder />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id}>
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  );
}

function EventsLoadingPlaceholder() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
