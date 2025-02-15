import { ArrivalStatus, DepartureStatus } from "../lib/types";

interface StatusFilterProps {
  value: ArrivalStatus | DepartureStatus | "";
  onChange: (value: ArrivalStatus | DepartureStatus | "") => void;
}
const StatusFilter = ({value, onChange}: StatusFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange("")}
        className={`px-3 py-1 rounded-full text-sm ${
          value === "" 
            ? "bg-bg-accent text-text-base" 
            : "bg-bg-base text-text-subtle"
        }`}
      >
        All
      </button>
      <button
        onClick={() => onChange("On-Schedule")}
        className={`px-3 py-1 rounded-full text-sm ${
          value === "On-Schedule"
            ? "bg-bg-accent text-text-base"
            : "bg-bg-base text-text-subtle"
        }`}
      >
        On Time
      </button>
      <button
        onClick={() => onChange("Delayed")}
        className={`px-3 py-1 rounded-full text-sm ${
          value === "Delayed"
            ? "bg-bg-accent text-text-base"
            : "bg-bg-base text-text-subtle"
        }`}
      >
        Delayed
      </button>
      <button
        onClick={() => onChange("Boarding")}
        className={`px-3 py-1 rounded-full text-sm ${
          value === "Boarding"
            ? "bg-bg-accent text-text-base"
            : "bg-bg-base text-text-subtle"
        }`}
      >
        Boarding
      </button>
      <button
        onClick={() => onChange("Final Call")}
        className={`px-3 py-1 rounded-full text-sm ${
          value === "Final Call"
            ? "bg-bg-accent text-text-base"
            : "bg-bg-base text-text-subtle"
        }`}
      >
        Final Call
      </button>
      <button
        onClick={() => onChange("Gate Closed")}
        className={`px-3 py-1 rounded-full text-sm ${
          value === "Gate Closed"
            ? "bg-bg-accent text-text-base"
            : "bg-bg-base text-text-subtle"
        }`}
      >
        Gate Closed
      </button>
    </div>
  )
}

export default StatusFilter