import { LIVE_PATH, PROJECT_ID, PROJECT_NUMBER, PUBLIC_PATH } from "../types";
import { SampleBadge, SectionKicker } from "../ui";


export function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex flex-wrap items-center gap-3">
        <SectionKicker>About and live location</SectionKicker>
        <SampleBadge />
      </div>
      <h1 className="mt-4 font-display text-5xl tracking-wide uppercase sm:text-7xl">
        BRIK Creative, LLC
      </h1>
      <p className="mt-4 text-lg text-paper">
        Ground Crew South is BRIK Creative project {PROJECT_NUMBER}. A rural
        placement desk for storage, line work, storm restore, and site build
        seats in Gulf, Delta, and nearby counties.
      </p>

      <section className="mt-10 border border-line p-5">
        <SectionKicker>Live path</SectionKicker>
        <a
          href={LIVE_PATH}
          className="mt-3 block break-all font-mono text-sm tracking-normal text-yellow lowercase underline-offset-4 hover:underline sm:text-base"
        >
          {LIVE_PATH}
        </a>
        <p className="mt-3 font-mono text-[11px] tracking-[0.16em] text-grey uppercase">
          Preferred path. Vault door stays on the root.
        </p>
        <p className="mt-6 font-mono text-[10px] tracking-[0.28em] text-grey uppercase">
          Public production URL
        </p>
        <a
          href={PUBLIC_PATH}
          className="mt-3 block break-all font-mono text-sm tracking-normal text-yellow lowercase underline-offset-4 hover:underline sm:text-base"
        >
          {PUBLIC_PATH}
        </a>
        <p className="mt-3 text-sm text-grey">
          This app is not password locked. Seed records are SAMPLE. Separate
          repo. Not the vault hub. Custom domain attach is blocked, so this
          ship is public on GitHub Pages.
        </p>
      </section>

      <section className="mt-6 grid gap-px bg-line sm:grid-cols-2">
        <div className="bg-ink p-5">
          <SectionKicker>What it is</SectionKicker>
          <p className="mt-3 text-sm leading-relaxed text-paper">
            Places local people on storage, line, and storm work. Lessons can
            be free. The paid product is a seat.
          </p>
        </div>
        <div className="bg-ink p-5">
          <SectionKicker>What it is not</SectionKicker>
          <p className="mt-3 text-sm leading-relaxed text-paper">
            Not an online school. Not a union hiring hall. Not a national job
            board scrape.
          </p>
        </div>
      </section>

      <dl className="mt-8 grid gap-4 font-mono text-[11px] tracking-[0.14em] text-grey uppercase">
        <div>
          <dt>Project id</dt>
          <dd className="mt-1 text-paper">{PROJECT_ID}</dd>
        </div>
        <div>
          <dt>Series</dt>
          <dd className="mt-1 text-paper">BRIK ground energy desk</dd>
        </div>
        <div>
          <dt>Seed county</dt>
          <dd className="mt-1 text-paper">Gulf County, Florida</dd>
        </div>
        <div>
          <dt>Export</dt>
          <dd className="mt-1 text-paper">github-and-static-host</dd>
        </div>
      </dl>
    </div>
  );
}
