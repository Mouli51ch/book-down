import { type Event } from "@/types";
import { mockEvents } from "@/lib/data/mockEvents";

export async function getFeaturedEvents(): Promise<Event[]> {
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockEvents;
}

export async function getAllEvents(): Promise<Event[]> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockEvents;
}

export async function getEventById(id: string): Promise<Event | null> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const event = mockEvents.find(event => event.id === id);
  return event || null;
}
