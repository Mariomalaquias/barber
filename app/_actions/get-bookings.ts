"use server";

import { endOfDay, startOfDay } from "date-fns";
import { db } from "../_lib/prisma";

interface GetBookingsProps {
  serviceId: string;
  date: Date;
}

export const getBookings = async ({ date }: GetBookingsProps) => {
  return db.booking.findMany({
    where: {
      date: {
        lte: endOfDay(date),
        gte: startOfDay(date),
      },
    },
  });
};

// Esta função, getBookings, foi criada para encontrar todas as reservas no banco de dados
// que ocorrem dentro de um dia específico (da meia-noite até 23:59h) com base na data fornecida.
