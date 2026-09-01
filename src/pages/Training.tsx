

import { RuleLine, SampleBadge, SectionKicker } from "../ui";

export function TrainingPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex flex-wrap items-center gap-3">
        <SectionKicker>Training rule</SectionKicker>
        <SampleBadge />
      </div>
      <h1 className="mt-4 font-display text-5xl tracking-wide uppercase sm:text-7xl">
        Lessons are not the product
      </h1>
      <p className="mt-4 text-base text-grey">
        Numbered lines. Read them before anyone claims a seat, a grant, or a
        class as placement.
      </p>

      <ol className="mt-10">
        <RuleLine n="01">
          Digital lessons are not the product. Anyone can study. The paid
          product is a seat on a yard, a line, a restore crew, or a site build.
        </RuleLine>
        <RuleLine n="02">
          No placement claim without an employer seat. A trainee file is a
          file. It is not a job, a dispatch, or a union ticket.
        </RuleLine>
        <RuleLine n="03">
          Insurance and site safety sit with the employer. Ground Crew South
          does not carry the site, the truck, or the crew.
        </RuleLine>
        <RuleLine n="04">
          DRA or workforce funding is a verify-window item, not a promise.
          Funding gets checked. It is not sold as a guarantee.
        </RuleLine>
      </ol>
    </div>
  );
}
