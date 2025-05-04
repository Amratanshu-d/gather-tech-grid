
export type EventType = "hackathon" | "tech-talk" | "workshop" | "other";

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  college: string;
  type: EventType;
  link: string;
  imageUrl?: string;
}

export type FilterOptions = {
  search: string;
  eventType: EventType | "all";
  college: string;
  fromDate: Date | undefined;
  toDate: Date | undefined;
};
