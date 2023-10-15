import {Elysia, t} from "elysia";
import { findAll, add, findById, removeById } from "../handler/reservations.handle";


export const reservationsRoutes = (app: Elysia) => (
  app.get('/reservations', async () => {
    const reservations = await findAll();
    return reservations;
  }),
  app.get('/reservations/:id', async ({params}) => {
    const reservation = await findById(parseInt(params.id));
    return reservation;
  }),
  app.delete('/reservations/:id', async ({params}) => {
     await removeById(parseInt(params.id));
     return {
      response: 'success removed',
    }
  }),
  app.post('/reservations', async ({body}) => {
    await add(body);

    return {
      response: 'success added',
    }
  }, {
    body: t.Object({
      flightId: t.Number(),
      passengerId: t.Number(),
      seatNumber: t.Number(),
      reservationDate: t.String()
    })
  })
)