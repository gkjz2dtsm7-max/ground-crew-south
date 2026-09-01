import { useMemo, useState } from "react";
import { SEATS } from "../catalog";
import type { SeatStatus, WorkType } from "../types";
import { WORK_TYPES } from "../types";
import { SampleBadge, SeatCard, SectionKicker } from "../ui";
import { cn } from "../cn";


const STATUSES: Array<SeatStatus | "all"> = ["all", "open", "waitlist", "closed"];

export function SeatsPage() {
  const [status, setStatus] = useState<SeatStatus | "all">("all");
  const [work, setWork] = useState<WorkType | "all">("all");

  const filtered = useMemo(
    () =>
      SEATS.filter((seat) => {
        if (status !== "all" && seat.status !== status) return false;
        if (work !== "all" && seat.workType !== work) return false;
        return true;
      }),
    [status, work],
  );

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-wrap items-center gap-3">
        <SectionKicker>Seats board</SectionKicker>
        <SampleBadge />
      </div>
      <h1 className="mt-4 font-display text-5xl tracking-wide uppercase sm:text-7xl">
        SAMPLE seats
      </h1>
      <p className="mt-4 max-w-2xl text-base text-grey">
        Three seed seats for Gulf, Delta, and nearby counties. Yellow marks an
        open SAMPLE seat. This board is not a national scrape.
      </p>

      <div className="mt-8 flex flex-col gap-4">
        <FilterRow
          label="Status"
          value={status}
          options={STATUSES}
          onChange={setStatus}
        />
        <FilterRow
          label="Work"
          value={work}
          options={["all", ...WORK_TYPES]}
          onChange={(v) => setWork(v as WorkType | "all")}
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {filtered.map((seat) => (
          <SeatCard key={seat.id} seat={seat} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 border border-line px-4 py-6 text-sm text-grey">
          No SAMPLE seats match those filters.
        </p>
      ) : null}
    </div>
  );
}

function FilterRow<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: readonly T[];
  onChange: (value: T) => void;
}) {
  return (
    <div>
      <p className="font-mono text-[10px] tracking-[0.22em] text-grey uppercase">
        {label}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={cn(
              "min-h-11 px-3 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors",
              value === option
                ? "bg-yellow text-ink"
                : "border border-line text-grey hover:text-paper",
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
