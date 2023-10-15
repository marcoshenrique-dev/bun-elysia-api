import { AddReservationDTO } from "../dtos/reservations";
import reservationsRepository from "../repositories/reservations.repository";

export async function findAll() {
  const reservations = await reservationsRepository.findAll();
  return reservations;
}
export async function add(data: AddReservationDTO) {
  await reservationsRepository.add(data);
}
export async function findById(id: number) {
  const flight = await reservationsRepository.findById(id);
  return flight;
}

export async function removeById(id: number) {
 await reservationsRepository.removeById(id);
}