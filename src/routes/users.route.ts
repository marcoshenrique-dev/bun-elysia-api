import {Elysia, t} from "elysia";
import { findAll, add, findById, removeById } from "../handlers/users.handle";
import { UserRole } from "../dtos/users";


export const usersRoutes = (elysia: Elysia) => (
  elysia.guard({
    beforeHandle: ({headers}) => {
      const role = headers.role as UserRole;
      if(role !== 'ADMIN') {
        return {
          message: 'You are not allowed to access this'
        }
      } 
    }
  }, app => (
  app.get('/users', async () => {
    const users = await findAll();
    return users;
  }),
  app.get('/users/:id', async ({params}) => {
    const passenger = await findById(parseInt(params.id));
    return passenger;
  }),
  app.delete('/users/:id', async ({params}) => {
     await removeById(parseInt(params.id));
     return {
      response: 'success removed',
    }
  }),
  app.post('/users', async ({body}) => {
    await add(body);

    return {
      response: 'success added',
    }
  }, {
    body: t.Object({
      name: t.String(),
      email:t.String(),
      password: t.String(),
      role: t.Enum(UserRole)
    })
  })
  )

  ))
