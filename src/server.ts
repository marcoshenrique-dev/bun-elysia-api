import {Elysia, t} from "elysia";
import { flightsRoutes } from "./routes/flights.route";
import { usersRoutes } from "./routes/users.route";

import swagger from "@elysiajs/swagger";

import { reservationsRoutes } from "./routes/reservations.route";
import { authRoutes } from "./routes/auth.route";
import { verify } from "jsonwebtoken";
import { UserRole } from "@prisma/client";

interface TokenPayload {
  sub: string;
  role: UserRole;
}

new Elysia()
.use(swagger())
.use(authRoutes)
.guard({
  beforeHandle: ({headers, }) => {
  const authToken = headers.authorization;
  if (!authToken) {
    return {
      message: "Auth token dont provided",
    };
  }

  const [, token] = authToken.split(" ");

  try {
    if (process.env.JWT_SECRET === undefined) {
      throw new Error("error on sync enviroment variables");
    }

    const decoded = verify(token, process.env.JWT_SECRET) as TokenPayload;

    headers.role = decoded.role;
  } catch (err: any) {
    return {
      message: err.message || "invalid token",
    };
  }
  }
}, app => (
  app.use(usersRoutes),
  app.use(flightsRoutes),
  app.use(reservationsRoutes)
))

.listen(3001, () => console.log(`server started at http://localhost:3001`))