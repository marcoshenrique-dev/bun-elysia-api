import {Elysia, t} from "elysia";
import { authenticate } from "../handlers/auth.handler";

export const authRoutes = (app: Elysia) => (
  app.post('/auth', async ({body}) => {
    return authenticate(body);    
  }, {
    body: t.Object({
      email:t.String(),
      password: t.String()
    })
  })
)