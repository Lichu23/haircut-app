import React, { Dispatch, SetStateAction, useState } from "react";
import ReactCalendar from "react-calendar";
import { add, format } from "date-fns";
import { STORE_CLOSE_TIME, STORE_INTERVAL_TIME, STORE_OPENING_TIME } from "@/app/constants/ReservationTimes/config";
import { DateTime } from "@/app/Interfaces/reservationInterface";

interface ReservationProps {
  dateReservation: DateTime
  setDateReservation: Dispatch<SetStateAction<DateTime>>
}

function Calendar({setDateReservation, dateReservation} : ReservationProps ) {

  const barberShopSchedule = () => {
    if (!dateReservation.justDate) return;

    const { justDate } = dateReservation;

    const open = add(justDate, { hours: STORE_OPENING_TIME}); //horario de apertura
    const end = add(justDate, { hours: STORE_CLOSE_TIME }); //horario de cierre

    const interval = STORE_INTERVAL_TIME; //minutes

    const times = [];
    for (let i = open; i <= end; i = add(i, { minutes: interval })) {
      times.push(i);
    }
    return times;
  };

  const times = barberShopSchedule();

  console.log(dateReservation.dateTime);
  return (
    <div className="h-screen bg-white flex flex-col justify-center items-center">
      {dateReservation.justDate ? (
        <div className="w-full  flex  gap-4">
          {times?.map((time, i) => (
            <div key={`time-${i}`} className="rounded-sm bg-gray-100 p-2">
              <button
                onClick={() =>
                  setDateReservation((prevDate) => ({
                    ...prevDate,
                    dateTime: time,
                  }))
                }
              >
                {format(time, "kk:mm")}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <>
          <h1 className="font-bold ">Reserve your haircut day</h1>

          <ReactCalendar
            minDate={new Date()}
            view="month"
            className=""
            onClickDay={(date) =>
              setDateReservation((prevDate) => ({
                ...prevDate,
                justDate: date,
              }))
            } //al hacer click en un dia se guardara esa fecha en el state creado para las reservas
          />
        </>
      )}
    </div>
  );
}

export default Calendar;
