import { AddFlightDTO } from "../dtos/flights";
import flightsRepository from "../repositories/flights.repository";

export async function findAll() {
  const flights = await flightsRepository.findAll();
  return flights;
}
export async function add(data: AddFlightDTO) {
  await flightsRepository.add(data);
}
export async function findById(id: number) {
  const flight = await flightsRepository.findById(id);
  return flight;
}

export async function removeById(id: number) {
 await flightsRepository.removeById(id);
}