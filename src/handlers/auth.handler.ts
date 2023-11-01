
import { compare } from "bcryptjs";
import { AuthenticateDTO } from "../dtos/auth";
import passengersRepository from "../repositories/users.repository";

import jwt from 'jsonwebtoken';

export async function authenticate({email, password}: AuthenticateDTO) {

  const userExists = await passengersRepository.findByEmail(email);

  if(!userExists) {
    return {
      message: 'Invalid credentials'
    }
  }

  const isPasswordValid = compare(password, userExists.password);

  if(!isPasswordValid) {
    return {
      message: 'Invalid credentials'
    }
  }

  return {
    access_token: jwt.sign({sub: userExists.id, role: userExists.role}, process.env.JWT_SECRET!, {
      expiresIn: '1d'
    })
  };
}
