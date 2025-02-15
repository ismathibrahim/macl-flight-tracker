import { AirplaneLanding, AirplaneTakeoff } from "@phosphor-icons/react";
import { Button } from "react-aria-components";

interface DirectionSwitcherProps {
  value: "arrival" | "departure";
  onChange: (value: "arrival" | "departure") => void;
}

const DirectionSwitcher = ({ value, onChange }: DirectionSwitcherProps) => {
  return (
    <div className="bg-bg-disabled w-full rounded-3xl p-1">
      <div className="">
        <Button
          aria-label="Arrivals"
          onPress={() => onChange("arrival")}
          className={`w-1/2 px-4 py-2 rounded-xl focus:outline-none cursor-pointer ${
            value === "arrival"
              ? "bg-bg-base text-text-base border border-border-base card-shadow"
              : "bg-bg-disabled text-text-subtle hover:text-text-base"
          }`}
        >
          <div className="flex gap-2 items-center justify-center">
            <AirplaneLanding />
            Arrivals
          </div>
        </Button>
        <Button
          aria-label="Departures"
          onPress={() => onChange("departure")}
          className={`w-1/2 px-4 py-2 rounded-xl focus:outline-none cursor-pointer ${
            value === "departure"
              ? "bg-bg-base text-text-base border border-border-base card-shadow"
              : "bg-bg-disabled text-text-subtle hover:text-text-base"
          }`}
        >
          <div className="flex gap-2 items-center justify-center">
            <AirplaneTakeoff />
            Departures
          </div>
        </Button>
      </div>
    </div>
  );
};

export default DirectionSwitcher;
