"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionEntry = {
  question: string;
  answer: string;
};

export function Accordion({ items }: { items: AccordionEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const focusTrigger = (index: number) => {
    const total = items.length;
    const next = ((index % total) + total) % total;
    triggerRefs.current[next]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        focusTrigger(index + 1);
        break;
      case "ArrowUp":
        event.preventDefault();
        focusTrigger(index - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTrigger(0);
        break;
      case "End":
        event.preventDefault();
        focusTrigger(items.length - 1);
        break;
    }
  };

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                ref={(el) => {
                  triggerRefs.current[index] = el;
                }}
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left"
              >
                <span className="text-base font-semibold text-text sm:text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 text-accent transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className="grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pr-10 text-sm leading-relaxed text-text-secondary sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
