import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

type Event = {
  id: string
  title: string
  date: string
  image: string
}

interface EventListProps {
  initialEvents: Event[]
}

const EventList: React.FC<EventListProps> = ({ initialEvents }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {initialEvents.map((event) => (
        <Card key={event.id} className="overflow-hidden">
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <CardHeader>
            <CardTitle>{event.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">{event.date}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default EventList

