import { useState } from "react";
import { useFlights } from "../api";
import DirectionSwitcher from "../components/DirectionSwitcher";
import FlightCard from "../components/FlightCard";
import SearchField from "../components/SearchField";
import { Button } from "react-aria-components";
import { ArrivalStatus, DepartureStatus } from "../lib/types";
import StatusFilter from "../components/StatusFilter";

const Home = () => {
  const [direction, setDirection] = useState<"arrival" | "departure">(
    "arrival"
  );

  const [searchTerm, setSearchTerm] = useState("");

  const [status, setStatus] = useState<ArrivalStatus | DepartureStatus | "">(
    ""
  );

  const { data: flights, isLoading } = useFlights({
    direction,
    search: searchTerm,
    status,
  });

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-start">
        <h1 className="text-text-base text-xl">Flights</h1>
        <div className="flex justify-end mb-4">
          <Button
            onPress={() => document.documentElement.classList.toggle("dark")}
            className="px-3 py-1 rounded bg-bg-base border border-border-base text-text-base hover:bg-bg-subtle"
          >
            Toggle theme
          </Button>
        </div>
      </div>

      <DirectionSwitcher
        value={direction}
        onChange={(value) => setDirection(value)}
      />

      <SearchField
        value={searchTerm}
        onChange={(value) => setSearchTerm(value)}
        placeholder="Search flights"
      />
      <StatusFilter
        value={status}
        onChange={(value: ArrivalStatus | DepartureStatus | "") =>
          setStatus(value)
        }
      />

      {isLoading ? (
        <div className="p-4">Loading...</div>
      ) : !flights?.length ? (
        <div className="p-4">No flights found</div>
      ) : (
        <div className="space-y-2">
          {flights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
