import {Elysia, t} from "elysia";
import { findAll, add, findById, removeById } from "../handler/flights.handler";


export const flightsRoutes = (app: Elysia) => (
  app.get('/flights', async () => {
    const flights = await findAll();
    return flights;

  }),
  app.get('/flights/:id', async ({params}) => {
    const flight = await findById(parseInt(params.id));
    return flight;
  }),
  app.delete('/flights/:id', async ({params}) => {
     await removeById(parseInt(params.id));
     return {
      response: 'success removed',
    }
  }),
  app.post('/flights', async ({body}) => {
    await add(body);

    return {
      response: 'success added',
    }
  }, {
    body: t.Object({
      origin: t.String(),
      destination:t.String(),
      departure: t.String(),
      airline: t.String(),
      price: t.Number(),
    })
  })
)