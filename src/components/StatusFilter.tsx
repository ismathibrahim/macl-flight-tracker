import { Button } from "react-aria-components";
import { ArrivalStatus, DepartureStatus } from "../lib/types";

interface StatusFilterProps {
  value: ArrivalStatus | DepartureStatus | "";
  onChange: (value: ArrivalStatus | DepartureStatus | "") => void;
  direction?: "arrival" | "departure";
}
const StatusFilter = ({ value, onChange, direction }: StatusFilterProps) => {
  const statuses =
    direction === "arrival" ? arrivalStatuses : departureStatuses;

  return (
    <div className="flex flex-wrap gap-2">
      {statuses.map((status) => (
        <Button
          aria-label={status}
          key={status}
          onPress={() => (status === "All" ? onChange("") : onChange(status))}
          className={`px-3 py-1 rounded-full text-sm border border-border-base ${
            (value === status || (status === "All" && value === "")) &&
            "bg-bg-base"
              ? "bg-bg-disabled text-text-base"
              : "bg-bg-base text-text-subtle"
          }`}
        >
          {status}
        </Button>
      ))}
    </div>
  );
};

const arrivalStatuses: (ArrivalStatus | "All")[] = [
  "All",
  "On-Schedule",
  "Delayed",
  "Cancelled",
  "Diverted",
  "Landed",
];

const departureStatuses: (DepartureStatus | "All")[] = [
  "All",
  "On-Schedule",
  "Boarding",
  "Final Call",
  "Gate Closed",
  "Cancelled",
  "Departed",
];

export default StatusFilter;
