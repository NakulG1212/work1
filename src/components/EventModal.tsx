// src/components/EventModal.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Tag } from "lucide-react";
import type { EventItem } from "../types/events";

export type EventModalProps = {
  event: EventItem | null;
  onClose: () => void;
};

export default function EventModal({ event, onClose }: EventModalProps) {
  if (!event) return null;

  return (
    <AnimatePresence>
      {event && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-xl dark:border-gray-800 dark:bg-gray-900"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
          >
            {/* Thumbnail */}
            <div className="aspect-video w-full mb-4 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
              <img
                src={event.thumbnail}
                alt={event.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Title */}
            <header className="mb-3">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {event.title}
              </h3>
            </header>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(event.date).toLocaleString()}
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {event.location}
              </span>
              {event.online && (
                <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
                  Online
                </span>
              )}
            </div>

            {/* Description */}
            <div className="prose dark:prose-invert">
              <p>{event.description}</p>
            </div>

            {/* Actions */}
            <div className="mt-4 flex justify-end gap-2">
              {event.registerUrl ? (
                <a
                  href={event.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                >
                  Register Now
                  <Tag className="h-4 w-4" />
                </a>
              ) : event.detailsUrl ? (
                <a
                  href={event.detailsUrl}
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  More Details
                </a>
              ) : null}

              <button
                onClick={onClose}
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
