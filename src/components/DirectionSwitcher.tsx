import { Button } from "react-aria-components";

interface DirectionSwitcherProps {
  value: "arrival" | "departure";
  onChange: (value: "arrival" | "departure") => void;
}

const DirectionSwitcher = ({ value, onChange }: DirectionSwitcherProps) => {
  return (
    <div className="bg-bg-disabled w-full rounded-lg">
      <div className="flex rounded-lg overflow-hidden">
        <Button
          aria-label="Arrivals"
          onPress={() => onChange("arrival")}
          className={`w-1/2 px-4 py-2 ${
            value === "arrival"
              ? "bg-bg-base text-text-base"
              : "bg-bg-disabled text-text-subtle hover:bg-bg-subtle"
          }`}
        >
          Arrivals
        </Button>
        <Button
          aria-label="Departures"
          onPress={() => onChange("departure")}
          className={`w-1/2 px-4 py-2 ${
            value === "departure"
              ? "bg-bg-base text-text-base"
              : "bg-bg-disabled text-text-subtle hover:bg-bg-subtle"
          }`}
        >
          Departures
        </Button>
      </div>
    </div>
  );
};

export default DirectionSwitcher;
