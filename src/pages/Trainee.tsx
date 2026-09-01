import { Download, RotateCcw, Save } from "lucide-react";
import { useEffect, useState } from "react";
import {
  clearTrainee,
  downloadJson,
  loadTrainee,
  saveTrainee,
} from "../store";
import {
  WORK_TYPES,
  type TraineeFile,
  type WorkType,
} from "../types";
import {
  Field,
  GhostButton,
  PrimaryButton,
  SampleBadge,
  SectionKicker,
  SelectInput,
  TextInput,
} from "../ui";
import { cn } from "../cn";


export function TraineePage() {
  const [file, setFile] = useState<TraineeFile>(() => loadTrainee());
  const [notice, setNotice] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setFile(loadTrainee());
    setHydrated(true);
  }, []);

  function patch(partial: Partial<TraineeFile>) {
    setFile((prev) => ({ ...prev, ...partial, sample: true }));
  }

  function toggleWork(type: WorkType) {
    setFile((prev) => {
      const has = prev.willingWork.includes(type);
      return {
        ...prev,
        sample: true,
        willingWork: has
          ? prev.willingWork.filter((item) => item !== type)
          : [...prev.willingWork, type],
      };
    });
  }

  function onSave() {
    const next = saveTrainee(file);
    setFile(next);
    setNotice("Saved on this device. Survives refresh. SAMPLE tag stays on.");
  }

  function onDownload() {
    const next = saveTrainee(file);
    setFile(next);
    downloadJson("ground-crew-south-trainee-SAMPLE.json", next);
    setNotice("JSON downloaded. File is marked SAMPLE.");
  }

  function onClear() {
    setFile(clearTrainee());
    setNotice("Draft cleared on this device.");
  }

  if (!hydrated) {
    return (
      <div className="mx-auto max-w-3xl">
        <SectionKicker>Trainee file</SectionKicker>
        <p className="mt-6 text-sm text-grey">Loading the local file…</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex flex-wrap items-center gap-3">
        <SectionKicker>Trainee file</SectionKicker>
        <SampleBadge />
      </div>
      <h1 className="mt-4 font-display text-5xl tracking-wide uppercase sm:text-7xl">
        Add a trainee
      </h1>
      <p className="mt-4 max-w-2xl text-base text-grey">
        Name or initials only. Nothing here is a placement. The file lives in
        this browser until you download it. Do not enter a Social Security
        number.
      </p>

      <form
        className="mt-8 grid gap-6"
        onSubmit={(event) => {
          event.preventDefault();
          onSave();
        }}
      >
        <Field
          label="Name or initials only"
          htmlFor="name"
          hint="Nine-digit strings are rejected. Initials are enough."
        >
          <TextInput
            id="name"
            name="name"
            autoComplete="off"
            value={file.nameOrInitials}
            onChange={(event) => patch({ nameOrInitials: event.target.value })}
            placeholder="A.R."
          />
        </Field>

        <Field label="County" htmlFor="county">
          <TextInput
            id="county"
            name="county"
            value={file.county}
            onChange={(event) => patch({ county: event.target.value })}
            placeholder="Gulf County, Florida"
          />
        </Field>

        <fieldset>
          <legend className="font-mono text-[10px] tracking-[0.22em] text-grey uppercase">
            Willing work
          </legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {WORK_TYPES.map((type) => {
              const on = file.willingWork.includes(type);
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => toggleWork(type)}
                  className={cn(
                    "min-h-11 px-3 font-mono text-[11px] tracking-[0.16em] uppercase",
                    on ? "bg-yellow text-ink" : "border border-line text-grey",
                  )}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="grid gap-6 sm:grid-cols-3">
          <Field label="Has CDL" htmlFor="cdl">
            <SelectInput
              id="cdl"
              value={file.hasCdl}
              onChange={(event) =>
                patch({ hasCdl: event.target.value as TraineeFile["hasCdl"] })
              }
            >
              <option value="yes">yes</option>
              <option value="no">no</option>
            </SelectInput>
          </Field>
          <Field label="Has electrical hours" htmlFor="hours">
            <SelectInput
              id="hours"
              value={file.electricalHours}
              onChange={(event) =>
                patch({
                  electricalHours: event.target
                    .value as TraineeFile["electricalHours"],
                })
              }
            >
              <option value="yes">yes</option>
              <option value="no">no</option>
              <option value="unknown">unknown</option>
            </SelectInput>
          </Field>
          <Field label="Can start" htmlFor="start">
            <SelectInput
              id="start"
              value={file.canStart}
              onChange={(event) =>
                patch({
                  canStart: event.target.value as TraineeFile["canStart"],
                })
              }
            >
              <option value="immediately">immediately</option>
              <option value="30 days">30 days</option>
              <option value="unknown">unknown</option>
            </SelectInput>
          </Field>
        </div>

        <Field label="Status" htmlFor="status">
          <SelectInput
            id="status"
            value={file.status}
            onChange={(event) =>
              patch({ status: event.target.value as TraineeFile["status"] })
            }
          >
            <option value="draft">draft</option>
            <option value="SAMPLE">SAMPLE</option>
          </SelectInput>
        </Field>

        <div className="flex flex-col gap-3 sm:flex-row">
          <PrimaryButton type="submit">
            <Save className="size-4" />
            Save on this device
          </PrimaryButton>
          <GhostButton type="button" onClick={onDownload}>
            <Download className="size-4" />
            Download JSON
          </GhostButton>
          <GhostButton type="button" onClick={onClear}>
            <RotateCcw className="size-4" />
            Clear
          </GhostButton>
        </div>
      </form>

      {notice ? (
        <p className="mt-6 border-l-4 border-yellow bg-yellow px-4 py-3 text-sm text-ink">
          {notice}
        </p>
      ) : null}

      {file.savedAt ? (
        <p className="mt-4 font-mono text-[11px] tracking-[0.14em] text-grey uppercase">
          Last saved · {file.savedAt}
        </p>
      ) : null}
    </div>
  );
}
