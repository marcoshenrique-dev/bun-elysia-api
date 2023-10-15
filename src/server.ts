import {Elysia} from "elysia";
import { flightsRoutes } from "./routes/flights.route";
import { passengersRoutes } from "./routes/passengers.route";

import swagger from "@elysiajs/swagger";
import { reservationsRoutes } from "./routes/reservations.route";


new Elysia()
.use(swagger())
.use(flightsRoutes)
.use(passengersRoutes)
.use(reservationsRoutes)
.listen(3001, () => console.log(`server started at http://localhost:3001`))