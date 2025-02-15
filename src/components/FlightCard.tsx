import { Flight } from "../lib/types";
import { LogoMap, statusMap } from "../lib/utils";


import StatusBadge, { UIStatus } from "./StatusBadge";

interface Props {
  flight: Flight;
}
const FlightCard = ({ flight }: Props) => {
  return (
    <div className="bg-bg-base w-full border border-border-base p-4 rounded-3xl">
      <div className="flex gap-2 items-start border-b border-border-strong pb-3 mb-3 border-dashed hover:border-border-strong">
        <div className="flex gap-3 items-center grow">
          <div>
            <img src={LogoMap[flight.airline]} className="w-10 h-10" />
          </div>

          <div>
            <p className="text-text-base text-xl font-medium">{flight.flightNumber}</p>
            <p className="text-text-subtle text-sm">{flight.destination}</p>
          </div>
        </div>

        <StatusBadge
          label={flight.status}
          variant={statusMap[flight.status] as UIStatus}
        />
      </div>

      <div className="flex gap-2">
        <div className="w-1/2">
          <p className="text-text-subtle text-sm">Scheduled</p>
          <p className="text-text-base font-medium">{flight.sked}</p>
        </div>
        <div className="w-1/2">
          <p className="text-text-subtle text-sm">Estimated</p>
          <p className="text-text-base font-medium">{flight.eta}</p>
        </div>
      </div>
    </div>
  );
};


export default FlightCard;
