import prisma from "../database/prisma";
import { AddUserDTO } from "../dtos/users";

class PassengersRepository {
  async findAll() {
    return await prisma.user.findMany({
      include: {
        reservations: true,
      }
    });
  }
  async findByEmail(email: string) {
    return await prisma.user.findUnique({
     where: {
      email
     }
    });
  }
  async add(data: AddUserDTO) {
    return await prisma.user.create({
     data
    });
  }
  async findById(id: number) {
    return await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        reservations: true,
      }
    });
  }

  async removeById(id: number) {
    return await prisma.user.delete({
      where: {
        id,
      }
    });
  }
}

export default new PassengersRepository;