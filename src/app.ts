import express, { Application, Request, Response } from "express";
import cors from "cors";
import config from "./app/config";
import router from "./app/router";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send(`Server Running on port ${config.port}`);
});
app.use(globalErrorHandler);
app.use(notFound);
export default app;
