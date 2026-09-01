export const LIVE_PATH = "https://brucknerdemo.com/ground-crew-south/";
export const PROJECT_ID = "brik-04-ground-crew-south";
export const PROJECT_NUMBER = "04";

export const WORK_TYPES = [
  "storage",
  "line",
  "storm restore",
  "site build",
] as const;

export type WorkType = (typeof WORK_TYPES)[number];

export type SeatStatus = "open" | "waitlist" | "closed";
export type PaidOrTrainee = "paid" | "trainee";
export type YesNo = "yes" | "no";
export type YesNoUnknown = "yes" | "no" | "unknown";
export type StartWindow = "immediately" | "30 days" | "unknown";
export type TraineeStatus = "draft" | "SAMPLE";

export type Seat = {
  id: string;
  sample: true;
  name: string;
  county: string;
  geography: string;
  workType: WorkType;
  paidOrTrainee: PaidOrTrainee;
  status: SeatStatus;
  statusLabel: string;
  employer: string;
  startWindow: string;
  supervises: string;
};

export type SampleTrainee = {
  id: string;
  sample: true;
  initials: string;
  county: string;
  willingWork: WorkType[];
  hasCdl: YesNo;
  electricalHours: YesNoUnknown;
  canStart: StartWindow;
  mapsToSeatId: string;
  mapNote: string;
};

export type TraineeFile = {
  sample: true;
  savedAt: string;
  nameOrInitials: string;
  county: string;
  willingWork: WorkType[];
  hasCdl: YesNo;
  electricalHours: YesNoUnknown;
  canStart: StartWindow;
  status: TraineeStatus;
};

export type EmployerSheet = {
  sample: true;
  savedAt: string;
  seatsNeeded: string;
  county: string;
  workType: WorkType | "";
  startWindow: string;
  supervises: string;
  notes: string;
};

export const EMPTY_TRAINEE: TraineeFile = {
  sample: true,
  savedAt: "",
  nameOrInitials: "",
  county: "",
  willingWork: [],
  hasCdl: "no",
  electricalHours: "unknown",
  canStart: "unknown",
  status: "SAMPLE",
};

export const EMPTY_EMPLOYER: EmployerSheet = {
  sample: true,
  savedAt: "",
  seatsNeeded: "",
  county: "",
  workType: "",
  startWindow: "",
  supervises: "",
  notes: "",
};
