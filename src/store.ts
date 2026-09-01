import {
  EMPTY_EMPLOYER,
  EMPTY_TRAINEE,
  type EmployerSheet,
  type TraineeFile,
} from "./types";

const TRAINEE_KEY = "gcs-trainee-file-v1";
const EMPLOYER_KEY = "gcs-employer-sheet-v1";

function looksLikeSsn(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length === 9;
}

export function sanitizeName(value: string): string {
  const trimmed = value.trim().slice(0, 80);
  if (looksLikeSsn(trimmed)) return "";
  return trimmed;
}

export function loadTrainee(): TraineeFile {
  if (typeof window === "undefined") return { ...EMPTY_TRAINEE };
  try {
    const raw = window.localStorage.getItem(TRAINEE_KEY);
    if (!raw) return { ...EMPTY_TRAINEE };
    const parsed = JSON.parse(raw) as TraineeFile;
    return {
      ...EMPTY_TRAINEE,
      ...parsed,
      sample: true,
      nameOrInitials: sanitizeName(parsed.nameOrInitials ?? ""),
    };
  } catch {
    return { ...EMPTY_TRAINEE };
  }
}

export function saveTrainee(file: TraineeFile): TraineeFile {
  const next: TraineeFile = {
    ...file,
    sample: true,
    savedAt: new Date().toISOString(),
    nameOrInitials: sanitizeName(file.nameOrInitials),
  };
  window.localStorage.setItem(TRAINEE_KEY, JSON.stringify(next));
  return next;
}

export function clearTrainee(): TraineeFile {
  window.localStorage.removeItem(TRAINEE_KEY);
  return { ...EMPTY_TRAINEE };
}

export function loadEmployer(): EmployerSheet {
  if (typeof window === "undefined") return { ...EMPTY_EMPLOYER };
  try {
    const raw = window.localStorage.getItem(EMPLOYER_KEY);
    if (!raw) return { ...EMPTY_EMPLOYER };
    const parsed = JSON.parse(raw) as EmployerSheet;
    return { ...EMPTY_EMPLOYER, ...parsed, sample: true };
  } catch {
    return { ...EMPTY_EMPLOYER };
  }
}

export function saveEmployer(sheet: EmployerSheet): EmployerSheet {
  const next: EmployerSheet = {
    ...sheet,
    sample: true,
    savedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(EMPLOYER_KEY, JSON.stringify(next));
  return next;
}

export function downloadJson(filename: string, data: unknown) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
