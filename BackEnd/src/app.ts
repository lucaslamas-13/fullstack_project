import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { userRoutes } from "./routes/users.routes"
import { handleErrors } from "./erros"
import { loginRoutes } from "./routes/login.routes"
import { contactRoutes } from "./routes/contacts.routes"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors(
    {
        origin: "http://localhost:5173"
    }
    ))
app.use("/users", userRoutes)
app.use("/contacts", contactRoutes)
app.use("/login", loginRoutes)
app.use(handleErrors)

export default app