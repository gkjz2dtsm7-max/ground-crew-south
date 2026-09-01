import seatsFile from "./data/seats.json";
import traineesFile from "./data/sample-trainees.json";
import type { SampleTrainee, Seat } from "./types";

export const SEATS = seatsFile.seats as Seat[];
export const SAMPLE_TRAINEES = traineesFile.trainees as SampleTrainee[];

export function seatById(id: string): Seat | undefined {
  return SEATS.find((seat) => seat.id === id);
}

export function openSeatCount(): number {
  return SEATS.filter((seat) => seat.status === "open").length;
}
