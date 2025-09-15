// src/types/events.ts (optional central types file)
export type EventItem = {
  id: string;
  title: string;
  location: string;
  date: string;        // ISO 8601
  endDate?: string;    // ISO 8601
  thumbnail: string;
  description: string;
  online?: boolean;
  registerUrl?: string;
  detailsUrl?: string;
};
