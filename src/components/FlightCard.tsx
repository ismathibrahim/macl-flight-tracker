import { Flight } from "../lib/types";

import EmiratesLogo from "../assets/images/emirates.png";
import VirginLogo from "../assets/images/virgin.png";
import MaldivianLogo from "../assets/images/maldivian.png";
import SingaporeLogo from "../assets/images/singapore.png";
import StatusBadge, { UIStatus } from "./StatusBadge";

interface Props {
  flight: Flight;
}
const FlightCard = ({ flight }: Props) => {
  return (
    <div className="bg-bg-base w-full border border-border-base p-4 rounded-lg">
      <div className="flex gap-2 items-start border-b border-border-strong pb-3 mb-3 border-dashed">
        <div className="flex gap-3 items-center grow">
          <div>
            <img src={LogoMap[flight.airline]} className="w-10 h-10" />
          </div>

          <div>
            <p className="text-text-base">{flight.flightNumber}</p>
            <p className="text-text-subtle">{flight.destination}</p>
          </div>
        </div>

        <StatusBadge
          label={flight.status}
          variant={statusMap[flight.status] as UIStatus}
        />
      </div>

      <div className="flex gap-2">
        <div className="w-1/2">
          <p className="text-text-subtle text-text-sm">Scheduled</p>
          <p className="text-text-base">{flight.sked}</p>
        </div>
        <div className="w-1/2">
          <p className="text-text-subtle text-text-sm">Estimated</p>
          <p className="text-text-base">{flight.eta}</p>
        </div>
      </div>
    </div>
  );
};

const LogoMap = {
  emirates: EmiratesLogo,
  virgin: VirginLogo,
  maldivian: MaldivianLogo,
  singapore: SingaporeLogo,
};

const statusMap = {
  "On-Schedule": "info",
  Delayed: "warning",
  Cancelled: "error",
  Diverted: "highlight",
  Landed: "success",
  Boarding: "highlight",
  "Final Call": "highlight",
  "Gate Closed": "highlight",
  Departed: "success",
};
export default FlightCard;
