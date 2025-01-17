"use client";

import { useState } from "react";
import { Event } from "@/types";
import EventCard from "./EventCard";

interface EventListProps {
  initialEvents: Event[];
}

export default function EventList({ initialEvents }: EventListProps) {
  const [events] = useState<Event[]>(initialEvents);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
