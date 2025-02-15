import React from 'react'
import { useLocation } from 'react-router'

const flightData = {
  id: "MV101",
  flightNumber: "Q2 101",
  destination: "Male International Airport",
  departure: "2025-02-13T14:30:00",
  gate: "A1",
  baggageClaim: "Belt 3",
  status: "On-time"
}

const FlightDetails = () => {

  const { pathname } = useLocation();
  const flightNumber = pathname.split('/')[2];
  return (
    <div>FlightDetails


      

      <div className="bg-bg-subtle max-w-sm mx-auto p-4">
        <div className="bg-bg-base border border-border-base rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium">{flightData.flightNumber}</h3>
              <p className="text-text-subtle">{flightData.destination}</p>
            </div>
            <div className="text-right">
              <p className="text-text-subtle">Gate {flightData.gate}</p>
              <p className={`font-medium ${
                flightData.status === 'Delayed' 
                  ? 'text-text-error' 
                  : 'text-text-success'
              }`}>
                {flightData.status}
              </p>
            </div>
          </div>
          <div className="mt-3 flex justify-between text-sm text-text-subtle">
            <div>
              <p>Departure</p>
              <p>{new Date(flightData.departure).toLocaleTimeString()}</p>
            </div>
            <div className="text-right">
              <p>Baggage</p>
              <p>{flightData.baggageClaim}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlightDetails