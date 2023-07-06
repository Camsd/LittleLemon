import Heading from "./Heading";
import ReservationForm from "../components/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../Booking-api";
export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Heading />
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
} 
