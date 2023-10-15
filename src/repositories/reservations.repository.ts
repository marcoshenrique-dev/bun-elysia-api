import prisma from "../database/prisma";
import { AddReservationDTO } from "../dtos/reservations";

class ReservationsRepository {
  async findAll() {
    return await prisma.reservation.findMany({
      include: {
        flight: true,
        passenger: true,
      }
    });
  }
  async add(data: AddReservationDTO) {
    const {reservationDate, ...rest} = data;
    return await prisma.reservation.create({
     data: {
      reservationDate: new Date(reservationDate),
      ...rest,
     }
    });
  }
  async findById(id: number) {
    return await prisma.reservation.findUnique({
      where: {
        id,
      },
      include: {
        flight: true,
        passenger: true,
      }
    });
  }

  async removeById(id: number) {
    return await prisma.reservation.delete({
      where: {
        id,
      }
    });
  }
}

export default new ReservationsRepository;