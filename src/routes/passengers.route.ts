import {Elysia, t} from "elysia";
import { findAll, add, findById, removeById } from "../handlers/passengers.handle";


export const passengersRoutes = (app: Elysia) => (
  app.get('/passengers', async () => {
    const passengers = await findAll();
    return passengers;
  }),
  app.get('/passengers/:id', async ({params}) => {
    const passenger = await findById(parseInt(params.id));
    return passenger;
  }),
  app.delete('/passengers/:id', async ({params}) => {
     await removeById(parseInt(params.id));
     return {
      response: 'success removed',
    }
  }),
  app.post('/passengers', async ({body}) => {
    await add(body);

    return {
      response: 'success added',
    }
  }, {
    body: t.Object({
      name: t.String(),
      email:t.String(),
    })
  })
)