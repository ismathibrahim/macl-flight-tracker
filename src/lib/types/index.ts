export type Flight = {
  id: string;
  flightNumber: string;
  destination: string;
  sked: string; // scheduled time
  eta: string; // estimated time
  gate: string;
  baggageClaim: string;
  status: ArrivalStatus | DepartureStatus;
  direction: "arrival" | "departure";
  airline: "virgin" | "emirates" | "singapore" | "maldivian"
};

export type ArrivalStatus =
  | "On-Schedule"
  | "Delayed"
  | "Cancelled"
  | "Diverted"
  | "Landed";

export type DepartureStatus =
  | "On-Schedule"
  | "Boarding"
  | "Final Call"
  | "Gate Closed"
  | "Cancelled"
  | "Departed";
