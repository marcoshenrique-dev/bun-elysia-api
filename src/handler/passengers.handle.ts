import { AddPassengerDTO } from "../dtos/passengers";
import passengersRepository from "../repositories/passengers.repository";

export async function findAll() {
  const flights = await passengersRepository.findAll();
  return flights;
}
export async function add(data: AddPassengerDTO) {
  await passengersRepository.add(data);
}
export async function findById(id: number) {
  const flight = await passengersRepository.findById(id);
  return flight;
}

export async function removeById(id: number) {
 await passengersRepository.removeById(id);
}