import { Link } from "react-router-dom";
import {
  ArrowRight,
  ClipboardList,
  CloudLightning,
  FilePlus,
  HardHat,
  Warehouse,
} from "lucide-react";
import { openSeatCount } from "../catalog";
import { LIVE_PATH, PUBLIC_PATH } from "../types";
import { SampleBadge, SectionKicker } from "../ui";


const CARDS = [
  {
    icon: Warehouse,
    title: "Storage",
    body: "Commissioning helpers on Gulf yards. The seat is the product, not a course catalog.",
  },
  {
    icon: HardHat,
    title: "Line",
    body: "Delta and nearby helper seats. Closed SAMPLE stays visible so the board stays honest.",
  },
  {
    icon: CloudLightning,
    title: "Storm restore",
    body: "Wewahitchka restore crew waitlist SAMPLE. Local people first when the weather turns.",
  },
];

export function HomePage() {
  const open = openSeatCount();

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-wrap items-center gap-3">
        <SectionKicker>BRIK Creative · Project 04</SectionKicker>
        <SampleBadge />
      </div>

      <h1 className="mt-5 font-display text-[15vw] leading-[0.82] tracking-wide text-paper uppercase sm:text-8xl md:text-9xl">
        Ground
        <br />
        Crew South
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-paper sm:text-xl">
        Local seats. Real yards. No fake academy.
      </p>

      <div className="mt-8 max-w-3xl border-l-4 border-yellow bg-yellow px-5 py-4 text-ink">
        <p className="font-mono text-[10px] tracking-[0.24em] uppercase">
          The product is a seat
        </p>
        <p className="mt-1 text-lg font-medium sm:text-xl">
          Ground Crew South places local people on storage, line, and storm
          work. Lessons can be free. The paid product is a seat.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link
          to="/seats"
          className="inline-flex min-h-12 items-center justify-center gap-2 bg-paper px-5 text-sm font-medium text-ink transition-transform duration-150 active:scale-[0.96]"
        >
          View SAMPLE seats
          <ArrowRight className="size-4" />
        </Link>
        <Link
          to="/trainee"
          className="inline-flex min-h-12 items-center justify-center gap-2 border border-line-strong px-5 text-sm font-medium text-paper transition-transform duration-150 active:scale-[0.96]"
        >
          Add a trainee file
          <FilePlus className="size-4" />
        </Link>
        <Link
          to="/employer"
          className="inline-flex min-h-12 items-center justify-center gap-2 border border-line-strong px-5 text-sm font-medium text-paper transition-transform duration-150 active:scale-[0.96]"
        >
          Employer sheet
          <ClipboardList className="size-4" />
        </Link>
      </div>

      <p className="mt-6 font-mono text-[11px] tracking-[0.16em] text-grey uppercase">
        {open} open SAMPLE seat{open === 1 ? "" : "s"} on the Gulf board
      </p>

      <section className="mt-14 grid grid-cols-1 gap-px bg-line sm:grid-cols-3">
        {CARDS.map((card) => (
          <article key={card.title} className="bg-ink px-5 py-6">
            <card.icon className="size-5 text-signal" strokeWidth={2} />
            <h2 className="mt-4 font-display text-2xl tracking-wide uppercase">
              {card.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-grey">{card.body}</p>
          </article>
        ))}
      </section>

      <section className="mt-12 border border-line p-5 sm:p-6">
        <SectionKicker>Not this product</SectionKicker>
        <ol className="mt-4 space-y-2 text-sm text-paper">
          <li>1. Not an online school company.</li>
          <li>2. Not a union hiring hall.</li>
          <li>3. Not a job board scrape of the whole country.</li>
        </ol>
      </section>

      <p className="mt-10 break-all font-mono text-[11px] tracking-[0.12em] text-grey uppercase">
        Preferred path · {LIVE_PATH.replace("https://", "")}
      </p>
      <p className="mt-2 break-all font-mono text-[11px] tracking-[0.12em] text-yellow uppercase">
        Public now · {PUBLIC_PATH.replace("https://", "")}
      </p>
    </div>
  );
}
