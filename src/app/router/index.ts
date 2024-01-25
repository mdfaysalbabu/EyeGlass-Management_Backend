import express from "express";
import { UserRoutes } from "../modules/user/user.route";
import { eyeGlassRoutes } from "../modules/eyeGlasses/eyeglass.router";
import { SalesRoutes } from "../modules/sales/sales.router";


const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/eyeglass",
    route: eyeGlassRoutes,
  },
  {
    path: "/sales",
    route: SalesRoutes,
  },
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
