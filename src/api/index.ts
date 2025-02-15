import { FLIGHTS } from '../data/flights'
import { useQuery } from '@tanstack/react-query'
import { Flight } from '../lib/types'

///////////////////////////////
// Mock API Calls
///////////////////////////////
export const getFlights = (params?: {
  direction?: 'arrival' | 'departure',
  search?: string,
  status?: string
}): Promise<Flight[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filteredFlights = FLIGHTS;

      if (params?.direction) {
        filteredFlights = filteredFlights.filter(flight => 
          flight.direction === params.direction
        );
      }

      if (params?.search) {
        const searchTerm = params.search.toLowerCase();
        filteredFlights = filteredFlights.filter(flight =>
          flight.destination.toLowerCase().includes(searchTerm) ||
          flight.flightNumber.toLowerCase().includes(searchTerm)
        );
      }

      if (params?.status) {
        filteredFlights = filteredFlights.filter(flight =>
          flight.status === params.status
        );
      }

      resolve(filteredFlights);
    }, 1000)
  })
}


///////////////////////////////
// Query Hooks
///////////////////////////////
export const useFlights = (params?: {
  direction?: 'arrival' | 'departure',
  search?: string,
  status?: string
}) => {
  return useQuery({
    queryKey: ['flights', params?.direction, params?.search, params?.status],
    queryFn: () => getFlights(params)
  })
}



