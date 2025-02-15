import { Drawer } from "vaul";
import { Flight } from "../lib/types";
import StatusBadge, { UIStatus } from "./StatusBadge";
import { LogoMap, statusMap } from "../lib/utils";
import { Airplane, AirplaneLanding, AirplaneTakeoff } from "@phosphor-icons/react";

interface Props {
  flight: Flight;
  isOpen: boolean;
  onOpenChange: () => void;
}

const FlightDetails = ({ flight, isOpen, onOpenChange }: Props) => {
  return (
    <Drawer.Root open={isOpen} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-bg-base h-fit fixed bottom-0 left-0 right-0 outline-none rounded-t-6xl">
          <div className="max-w-lg mx-auto px-4 pb-5">
            <div className="w-full flex justify-center py-2 mb-4">
              <div className="h-1 w-14 rounded-full bg-border-strong"></div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="flex gap-3 items-center grow">
                <div>
                  <img src={LogoMap[flight.airline]} className="w-10 h-10" />
                </div>

                <div>
                  <p className="text-text-base text-xl font-medium">
                    {flight.flightNumber}
                  </p>
                  <p className="text-text-subtle text-sm capitalize">
                    {flight.airline}
                  </p>
                </div>
              </div>

              <StatusBadge
                label={flight.status}
                variant={statusMap[flight.status] as UIStatus}
              />
            </div>

            <div className="flex gap-2 justify-between items-center border-t border-border-strong mt-5 pt-5 border-dashed">
              <div className="w-2/5">
                <p className="text-text-subtle text-sm flex gap-1 items-center"><AirplaneTakeoff /> Departure</p>
                <p className="text-text-base font-medium">{
              flight.direction === "arrival" ? flight.destination : "Velana Int. Airport"
              }</p>
                <p className="text-text-subtle text-sm ">Feb 14, 10:32</p>
              </div>


              <div className="text-text-base rotate-90">
                <Airplane className="w-6 h-6" fill="currentColor" />
              </div>

              <div className="w-2/5 text-right">
                <p className="text-text-subtle text-sm flex gap-1 items-center justify-end"><AirplaneLanding /> Arrival</p>
                <p className="text-text-base font-medium">{
              flight.direction === "arrival" ? "Velana Int. Airport" : flight.destination
              }</p>
                <p className="text-text-subtle text-sm ">Feb 14, 18:12</p>
              </div>
            </div>

            <div className="flex gap-2 border-t border-border-strong mt-5 pt-5 border-dashed">
              <div className="w-1/2">
                <p className="text-text-subtle text-sm">Scheduled</p>
                <p className="text-text-base font-medium">{flight.sked}</p>
              </div>
              <div className="w-1/2">
                <p className="text-text-subtle text-sm">Estimated</p>
                <p className="text-text-base font-medium">{flight.eta}</p>
              </div>
            </div>

            <div className="flex gap-2 border-t border-border-strong mt-5 pt-5 border-dashed">
              <div className="flex gap-1">
                <p className="text-text-subtle">{flight.direction === "arrival" ? "Baggage Claim" : "Gate"}: </p>
                <p className="text-text-base font-medium">{flight.direction === "arrival" ? flight.baggageClaim : flight.gate}</p>
              </div>

            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default FlightDetails;
