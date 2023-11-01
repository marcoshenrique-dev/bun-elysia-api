import { AddUserDTO } from "../dtos/users";
import {hash} from 'bcryptjs';
import usersRepository from "../repositories/users.repository";

export async function findAll() {
  const flights = await usersRepository.findAll();
  return flights;
}
export async function add({password, ...rest}: AddUserDTO) {

  const hashedPassword = await hash(password, 10);

  await usersRepository.add({
    password: hashedPassword,
    ...rest,
  });
}
export async function findById(id: number) {
  const user = await usersRepository.findById(id);
  return user;
}

export async function removeById(id: number) {
 await usersRepository.removeById(id);
}