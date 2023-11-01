export enum UserRole {
  PASSENGER = 'PASSENGER',
  ADMIN = 'ADMIN',
}


export interface AddUserDTO {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}