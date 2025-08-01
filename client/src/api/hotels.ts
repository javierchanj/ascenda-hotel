// Fetches list of avail hotels for given parameters from backend
const HOTEL_API = 'http://localhost:4000/api/hotels';

export async function fetchHotels(
  destinationId: string,
  checkin: string,
  checkout: string,
  guests: string
) {

  // Constructed URL (sending req to backend which already merge hotel info + price)
  const url = `${HOTEL_API}/search?destination_id=${destinationId}&checkin=${checkin}&checkout=${checkout}&guests=${guests}`;
  
  // Req to backend 
  const res = await fetch(url);

  // If server returns anyth else, ERROR. 
  if (!res.ok) throw new Error("Failed to fetch merged hotel data");

  return res.json(); // returns: { hotels: [...], completed, destination_id, etc. }
}
