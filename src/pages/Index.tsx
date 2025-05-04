
import { useState, useMemo } from "react";
import EventCard from "@/components/EventCard";
import EventFilter from "@/components/EventFilter";
import { mockEvents } from "@/data/events";
import { Event, FilterOptions } from "@/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [filters, setFilters] = useState<FilterOptions>({
    search: "",
    eventType: "all",
    college: "",
    fromDate: undefined,
    toDate: undefined,
  });

  const handleAddEvent = (event: Event) => {
    setEvents((prev) => [event, ...prev]);
  };

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      
      // Filter by search term
      if (
        filters.search &&
        !event.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        !event.description.toLowerCase().includes(filters.search.toLowerCase()) &&
        !event.college.toLowerCase().includes(filters.search.toLowerCase()) &&
        !event.location.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false;
      }

      // Filter by event type
      if (filters.eventType !== "all" && event.type !== filters.eventType) {
        return false;
      }

      // Filter by college
      if (filters.college && event.college !== filters.college) {
        return false;
      }

      // Filter by from date
      if (filters.fromDate && eventDate < filters.fromDate) {
        return false;
      }

      // Filter by to date
      if (filters.toDate) {
        const toDateEnd = new Date(filters.toDate);
        toDateEnd.setHours(23, 59, 59, 999);
        if (eventDate > toDateEnd) {
          return false;
        }
      }

      return true;
    });
  }, [events, filters]);

  // Sort events by date
  const sortedEvents = useMemo(() => {
    return [...filteredEvents].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }, [filteredEvents]);

  // Get unique colleges for filter dropdown
  const colleges = useMemo(
    () => Array.from(new Set(events.map((event) => event.college))),
    [events]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Tech Event Grid</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover upcoming tech talks, hackathons, and workshops from colleges around the country.
          </p>
        </div>

        <EventFilter onFilterChange={setFilters} colleges={colleges} />

        <Tabs defaultValue="upcoming" className="mb-8">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="all">All Events</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming">
            {sortedEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedEvents
                  .filter((event) => new Date(event.date) >= new Date())
                  .map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900">No upcoming events found</h3>
                <p className="mt-1 text-gray-500">Try adjusting your filters or submit a new event.</p>
              </div>
            )}
          </TabsContent>
          <TabsContent value="all">
            {sortedEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900">No events found</h3>
                <p className="mt-1 text-gray-500">Try adjusting your filters or submit a new event.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
