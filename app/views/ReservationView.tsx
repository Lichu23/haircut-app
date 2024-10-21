"use client";

import React, { useState } from "react";
import Calendar from "../components/Calendar/Calendar";
import { DateTime } from "../Interfaces/reservationInterface";
import Spinner from "../components/Spinner";

function ReservationView() {
  const [dateReservation, setDateReservation] = useState<DateTime>({
    justDate: null, //es null porq de inicio no va a haber ninguna fecha elegida
    dateTime: null,
  });
  return (
    <div>
      {!dateReservation.dateTime && (
        <Calendar
          setDateReservation={setDateReservation}
          dateReservation={dateReservation}
        />
      )}

      {dateReservation.dateTime && false ? (
        <div>
          <h1>Hola</h1>
        </div>
      ) : (
        <div className="flex mt-60 items-center justify-center">
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default ReservationView;
