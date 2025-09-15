// src/components/EventCard.tsx
import React from "react";
import { Calendar, MapPin, Tag } from "lucide-react";
import { motion } from "framer-motion";
import type { EventItem } from "../types/events"; // or inline the type if you prefer

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${className}`}
    >
      {children}
    </span>
  );
}

export type EventCardProps = {
  event: EventItem;
  isUpcoming: boolean;
  onViewDetails?: (event: EventItem) => void;
};

export default function EventCard({
  event,
  isUpcoming,
  onViewDetails
}: EventCardProps) {
  const { title, location, date, thumbnail, description, online, registerUrl, detailsUrl } = event;

  return (
    <motion.article
      className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
      initial={{ opacity: 0, scale: 0.98, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={thumbnail}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-3 p-4">
        <h3 className="line-clamp-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>

        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-4 w-4" aria-hidden />
            {new Date(date).toLocaleString()}
          </span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-4 w-4" aria-hidden />
            {location}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {isUpcoming ? (
            <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
              Upcoming
            </Badge>
          ) : (
            <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">
              Completed
            </Badge>
          )}
          {online && (
            <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
              Online
            </Badge>
          )}
        </div>

        <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>

        <div className="mt-1 flex items-center justify-between">
          {isUpcoming && registerUrl ? (
            <a
              href={registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
            >
              Register Now
              <Tag className="h-4 w-4" aria-hidden />
            </a>
          ) : detailsUrl ? (
            <button
              type="button"
              onClick={() => onViewDetails?.(event)}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              View Details
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </motion.article>
  );
}
