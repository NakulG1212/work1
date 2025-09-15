// src/components/EventsSection.tsx
import React, { useMemo, useState } from "react";
import EventCard from "./EventCard";
import { motion } from "framer-motion";
import type { EventItem } from "../types/events";
import eventsDataRaw from "../data/events.json";
import EventModal from "./EventModal";

const eventsData = eventsDataRaw as EventItem[];

// const TABS = ["Upcoming", "Past", "All"] as const;
// type Tab = (typeof TABS)[number];

const STATUS_TABS = ["Upcoming", "Past", "All"] as const;
const TYPE_TABS = ["Seminar", "Workshop", "Training"] as const;
type StatusTab = (typeof STATUS_TABS)[number];
type TypeTab = (typeof TYPE_TABS)[number] | "AllTypes";

function computeIsUpcoming(iso: string): boolean {
  const start = new Date(iso).getTime();
  return start >= Date.now();
}

export type EventsSectionProps = {
  title?: string;
  initialCount?: number;
};

export default function EventsSection({
  title = "Seminars, Workshops & Trainings",
  initialCount = 4
}: EventsSectionProps) {
  const enriched = useMemo(() => {
    return eventsData
      .map((e) => ({
        ...e,
        isUpcoming: computeIsUpcoming(e.date)
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  
const [status, setStatus] = useState<StatusTab>("Upcoming");
const [type, setType] = useState<TypeTab>("AllTypes");
  // const [active, setActive] = useState<Tab>("Upcoming");
  const [visible, setVisible] = useState<number>(initialCount);

  const filtered = useMemo(() => {
     let base = enriched;
   if (status === "Upcoming") base = base.filter((e) => e.isUpcoming);
  if (status === "Past") base = base.filter((e) => !e.isUpcoming);

  // filter by type
  if (type !== "AllTypes") base = base.filter((e) => e.type === type);

  return base;
}, [status, type, enriched]);

  const showMore = () => setVisible((v) => v + initialCount);

  const [modalEvent, setModalEvent] = useState<EventItem | null>(null);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
          Explore past and upcoming events by Sournaksh Buildsoft Pvt. Ltd.
        </p>
      </motion.header>
<div className="mb-6 flex flex-wrap gap-2">
  {STATUS_TABS.map((tab) => {
    const isActive = tab === status;
    return (
      <button
        key={tab}
        onClick={() => {
          setStatus(tab);
          setVisible(initialCount);
        }}
        className={[
          "rounded-full border px-4 py-2 text-sm font-medium transition",
          isActive
            ? "border-gray-900 bg-gray-900 text-white dark:border-gray-100 dark:bg-gray-100 dark:text-gray-900"
            : "border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
        ].join(" ")}
      >
        {tab}
      </button>
    );
  })}
</div>

      {/* <div className="mb-6 flex flex-wrap gap-2">
        {STATUS_TABS.map((tab) => {
          const isActive = tab === active;
          return (
            <button
              key={tab}
              onClick={() => {
                setActive(tab);
                setVisible(initialCount);
              }}
              className={[
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                isActive
                  ? "border-gray-900 bg-gray-900 text-white dark:border-gray-100 dark:bg-gray-100 dark:text-gray-900"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              ].join(" ")}
            >
              {tab}
            </button>
          );
        })}
      </div> */}
      {/* Status Tabs */}
{/* <div className="mb-4 flex flex-wrap gap-2">
  {STATUS_TABS.map((tab) => {
    const isActive = tab === status;
    return (
      <button
        key={tab}
        onClick={() => {
          setStatus(tab);
          setVisible(initialCount);
        }}
        className={[
          "rounded-full border px-4 py-2 text-sm font-medium transition",
          isActive
            ? "border-gray-900 bg-gray-900 text-white dark:border-gray-100 dark:bg-gray-100 dark:text-gray-900"
            : "border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
        ].join(" ")}
      >
        {tab}
      </button>
    );
  })}
</div> */}

{/* Type Tabs */}
<div className="mb-6 flex flex-wrap gap-2">
  {["AllTypes", ...TYPE_TABS].map((tab) => {
    const isActive = tab === type;
    return (
      <button
        key={tab}
        onClick={() => {
          setType(tab as TypeTab);
          setVisible(initialCount);
        }}
        className={[
          "rounded-full border px-4 py-2 text-sm font-medium transition",
          isActive
            ? "border-gray-900 bg-gray-900 text-white dark:border-gray-100 dark:bg-gray-100 dark:text-gray-900"
            : "border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
        ].join(" ")}
      >
        {tab === "AllTypes" ? "All Types" : tab}
      </button>
    );
  })}
</div>


      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.slice(0, visible).map((event) => (
          <EventCard
            key={event.id}
            event={event}
            isUpcoming={(event as any).isUpcoming as boolean}
            onViewDetails={setModalEvent}
          />
        ))}
      </div>

      {visible < filtered.length && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={showMore}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            Load more
          </button>
        </div>
      )}

      {/*Optional modal — render only if implemented */}
      {modalEvent && (
        <EventModal event={modalEvent} onClose={() => setModalEvent(null)} />
      )}
    </section>
  );
}
