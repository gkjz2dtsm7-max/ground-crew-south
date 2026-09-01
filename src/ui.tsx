import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "./cn";
import type { Seat, SeatStatus } from "./types";

export function SampleBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center border border-yellow bg-yellow px-2 font-mono text-[10px] font-medium tracking-[0.22em] text-ink uppercase",
        className,
      )}
    >
      SAMPLE
    </span>
  );
}

export function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[10px] tracking-[0.28em] text-grey uppercase">
      {children}
    </p>
  );
}

export function StatusChip({ status }: { status: SeatStatus }) {
  if (status === "open") {
    return (
      <span className="inline-flex min-h-7 items-center bg-yellow px-2 font-mono text-[10px] tracking-[0.18em] text-ink uppercase">
        open SAMPLE
      </span>
    );
  }
  if (status === "waitlist") {
    return (
      <span className="inline-flex min-h-7 items-center border border-paper px-2 font-mono text-[10px] tracking-[0.18em] text-paper uppercase">
        waitlist SAMPLE
      </span>
    );
  }
  return (
    <span className="inline-flex min-h-7 items-center border border-grey px-2 font-mono text-[10px] tracking-[0.18em] text-grey uppercase">
      closed SAMPLE
    </span>
  );
}

export function Field({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string;
  htmlFor?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block" htmlFor={htmlFor}>
      <span className="font-mono text-[10px] tracking-[0.22em] text-grey uppercase">
        {label}
      </span>
      <div className="mt-2">{children}</div>
      {hint ? <p className="mt-1 text-xs text-grey">{hint}</p> : null}
    </label>
  );
}

const controlClass =
  "min-h-12 w-full border border-line bg-ink2 px-3 text-paper outline-none transition-colors focus:border-yellow";

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(controlClass, props.className)} />;
}

export function SelectInput(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...props} className={cn(controlClass, props.className)}>
      {props.children}
    </select>
  );
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(controlClass, "min-h-28 py-3", props.className)}
    />
  );
}

export function PrimaryButton({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 bg-paper px-5 text-sm font-medium text-ink transition-transform duration-150 active:scale-[0.96] disabled:opacity-40",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function GhostButton({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 border border-line-strong px-5 text-sm font-medium text-paper transition-transform duration-150 active:scale-[0.96]",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function SeatCard({ seat }: { seat: Seat }) {
  return (
    <article
      className={cn(
        "relative flex flex-col gap-4 border border-line bg-ink2 p-5",
        seat.status === "open" && "border-yellow",
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <StatusChip status={seat.status} />
        <SampleBadge />
      </div>
      <h2 className="font-display text-2xl tracking-wide text-balance uppercase">
        {seat.name}
      </h2>
      <dl className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
        <Meta label="County" value={seat.county} />
        <Meta label="Work type" value={seat.workType} />
        <Meta label="Paid or trainee" value={seat.paidOrTrainee} />
        <Meta label="Employer" value={seat.employer} />
        <Meta label="Geography" value={seat.geography} />
        <Meta label="Start window" value={seat.startWindow} />
      </dl>
    </article>
  );
}

export function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[10px] tracking-[0.2em] text-grey uppercase">
        {label}
      </dt>
      <dd className="mt-1 text-paper">{value}</dd>
    </div>
  );
}

export function RuleLine({ n, children }: { n: string; children: ReactNode }) {
  return (
    <li className="grid grid-cols-[auto_1fr] gap-4 border-t border-line py-6 first:border-t-0">
      <span className="font-display text-3xl text-signal tabular-nums">{n}</span>
      <p className="pt-1 text-lg leading-relaxed text-paper">{children}</p>
    </li>
  );
}
