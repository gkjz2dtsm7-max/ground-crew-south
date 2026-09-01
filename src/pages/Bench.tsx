import { ArrowRight } from "lucide-react";
import { SAMPLE_TRAINEES, seatById } from "../catalog";
import { Meta, SampleBadge, SectionKicker, StatusChip } from "../ui";


export function BenchPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-wrap items-center gap-3">
        <SectionKicker>SAMPLE Gulf bench</SectionKicker>
        <SampleBadge />
      </div>
      <h1 className="mt-4 font-display text-5xl tracking-wide uppercase sm:text-7xl">
        Three initials. Three seats.
      </h1>
      <p className="mt-4 max-w-2xl text-base text-grey">
        Fictional trainees. Initials only. Each maps to one SAMPLE seat so a
        desk can see the match without a real person in the file.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6">
        {SAMPLE_TRAINEES.map((trainee) => {
          const seat = seatById(trainee.mapsToSeatId);
          return (
            <article
              key={trainee.id}
              className="grid grid-cols-1 gap-4 border border-line bg-ink2 p-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch"
            >
              <div>
                <SampleBadge />
                <p className="mt-4 font-mono text-[10px] tracking-[0.24em] text-grey uppercase">
                  Trainee SAMPLE
                </p>
                <h2 className="mt-1 font-display text-5xl tracking-wide">
                  {trainee.initials}
                </h2>
                <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Meta label="County" value={trainee.county} />
                  <Meta
                    label="Willing work"
                    value={trainee.willingWork.join(", ")}
                  />
                  <Meta label="Has CDL" value={trainee.hasCdl} />
                  <Meta
                    label="Electrical hours"
                    value={trainee.electricalHours}
                  />
                  <Meta label="Can start" value={trainee.canStart} />
                </dl>
              </div>

              <div className="hidden items-center justify-center lg:flex">
                <ArrowRight className="size-8 text-signal" />
              </div>

              <div className="border border-line bg-ink p-4 lg:border-0 lg:bg-transparent lg:p-0">
                {seat ? (
                  <>
                    <div className="flex flex-wrap items-center gap-2">
                      <StatusChip status={seat.status} />
                      <SampleBadge />
                    </div>
                    <h3 className="mt-4 font-display text-2xl tracking-wide uppercase">
                      {seat.name}
                    </h3>
                    <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <Meta label="County" value={seat.county} />
                      <Meta label="Work type" value={seat.workType} />
                      <Meta label="Employer" value={seat.employer} />
                      <Meta label="Paid or trainee" value={seat.paidOrTrainee} />
                    </dl>
                    <p className="mt-4 text-sm leading-relaxed text-grey">
                      {trainee.mapNote}
                    </p>
                  </>
                ) : (
                  <p className="text-sm text-grey">Seat missing from seed.</p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
