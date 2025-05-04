
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Event } from "@/types";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const eventDate = new Date(event.date);
  
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "hackathon":
        return "bg-orange-500";
      case "tech-talk":
        return "bg-blue-500";
      case "workshop":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card className="event-card h-full flex flex-col">
      {event.imageUrl && (
        <div className="h-48 w-full overflow-hidden rounded-t-lg">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start mb-1">
          <Badge className={`${getEventTypeColor(event.type)} text-white`}>
            {event.type.replace("-", " ")}
          </Badge>
          <Badge variant="outline" className="text-xs font-normal">
            {event.college}
          </Badge>
        </div>
        <CardTitle className="text-xl">{event.title}</CardTitle>
        <div className="flex items-center text-sm text-muted-foreground mt-1">
          <CalendarIcon className="mr-1 h-4 w-4" />
          {format(eventDate, "PPP 'at' p")}
        </div>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <CardDescription className="line-clamp-3">
          {event.description}
        </CardDescription>
        <p className="text-sm mt-2 text-muted-foreground">
          <strong>Location:</strong> {event.location}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a href={event.link} target="_blank" rel="noopener noreferrer">
            View Event
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
