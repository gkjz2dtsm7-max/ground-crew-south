import { Printer, Save } from "lucide-react";
import { useEffect, useState } from "react";
import { loadEmployer, saveEmployer } from "../store";
import {
  WORK_TYPES,
  type EmployerSheet,
} from "../types";
import {
  Field,
  GhostButton,
  PrimaryButton,
  SampleBadge,
  SectionKicker,
  SelectInput,
  TextArea,
  TextInput,
} from "../ui";


export function EmployerPage() {
  const [sheet, setSheet] = useState<EmployerSheet>(() => loadEmployer());
  const [notice, setNotice] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setSheet(loadEmployer());
    setHydrated(true);
  }, []);

  function patch(partial: Partial<EmployerSheet>) {
    setSheet((prev) => ({ ...prev, ...partial, sample: true }));
  }

  function onSave() {
    const next = saveEmployer(sheet);
    setSheet(next);
    setNotice("Employer sheet saved on this device.");
  }

  function onPrint() {
    saveEmployer(sheet);
    window.print();
  }

  if (!hydrated) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <SectionKicker>Employer sheet</SectionKicker>
        <p className="mt-6 text-sm text-grey">Loading the local sheet…</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="no-print px-4 py-8 sm:px-0">
        <div className="flex flex-wrap items-center gap-3">
          <SectionKicker>Employer sheet</SectionKicker>
          <SampleBadge />
        </div>
        <h1 className="mt-4 font-display text-5xl tracking-wide uppercase sm:text-7xl">
          Mark a seat
        </h1>
        <p className="mt-4 max-w-2xl text-base text-grey">
          One letter page an employer can mark. SAMPLE watermark prints with
          the sheet. Insurance and site safety stay with the employer.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <PrimaryButton type="button" onClick={onSave}>
            <Save className="size-4" />
            Save draft
          </PrimaryButton>
          <GhostButton type="button" onClick={onPrint}>
            <Printer className="size-4" />
            Print letter sheet
          </GhostButton>
        </div>
        {notice ? (
          <p className="mt-4 border-l-4 border-yellow bg-yellow px-4 py-3 text-sm text-ink">
            {notice}
          </p>
        ) : null}
      </div>

      <article className="print-sheet relative mx-auto border border-line p-6 sm:p-10">
        <div className="sample-watermark" aria-hidden="true">
          SAMPLE
        </div>
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4 border-b-4 border-signal pb-4">
            <div>
              <p className="font-mono text-[10px] tracking-[0.28em] text-grey uppercase">
                BRIK Creative · Project 04
              </p>
              <h2 className="mt-1 font-display text-4xl tracking-wide uppercase">
                Ground Crew South
              </h2>
              <p className="mt-1 text-sm">Employer seat sheet · SAMPLE</p>
            </div>
            <SampleBadge />
          </div>

          <div className="hazard-tape-thin mt-4" aria-hidden="true" />

          <div className="mt-6 grid gap-5">
            <Field label="Seats needed" htmlFor="seatsNeeded">
              <TextInput
                id="seatsNeeded"
                value={sheet.seatsNeeded}
                onChange={(event) => patch({ seatsNeeded: event.target.value })}
                placeholder="2 storage helpers, 1 storm restore"
              />
            </Field>
            <Field label="County" htmlFor="empCounty">
              <TextInput
                id="empCounty"
                value={sheet.county}
                onChange={(event) => patch({ county: event.target.value })}
                placeholder="Gulf County, Florida"
              />
            </Field>
            <Field label="Work type" htmlFor="empWork">
              <SelectInput
                id="empWork"
                value={sheet.workType}
                onChange={(event) =>
                  patch({
                    workType: event.target.value as EmployerSheet["workType"],
                  })
                }
              >
                <option value="">select SAMPLE</option>
                {WORK_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </SelectInput>
            </Field>
            <Field label="Start window" htmlFor="empStart">
              <TextInput
                id="empStart"
                value={sheet.startWindow}
                onChange={(event) => patch({ startWindow: event.target.value })}
                placeholder="immediate / 30 days / named storm"
              />
            </Field>
            <Field label="Who supervises" htmlFor="empSup">
              <TextInput
                id="empSup"
                value={sheet.supervises}
                onChange={(event) => patch({ supervises: event.target.value })}
                placeholder="Yard lead name or title"
              />
            </Field>
            <Field label="Notes for the desk" htmlFor="empNotes">
              <TextArea
                id="empNotes"
                value={sheet.notes}
                onChange={(event) => patch({ notes: event.target.value })}
                placeholder="Site hours, PPE, CDL need. SAMPLE only."
              />
            </Field>
          </div>

          <ol className="mt-8 space-y-1 border-t border-line pt-4 font-mono text-[11px] tracking-[0.08em] text-grey uppercase">
            <li>1. This sheet is SAMPLE. Not a hiring promise.</li>
            <li>2. Insurance and site safety sit with the employer.</li>
            <li>3. No placement claim without an employer seat.</li>
          </ol>
        </div>
      </article>
    </div>
  );
}
