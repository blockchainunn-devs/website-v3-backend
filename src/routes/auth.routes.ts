import auth from "../controllers/auth.controllers";

import Router from "express";
const authRoutes = Router.Router();

// Basic Auth Routes
authRoutes.post("/login/", auth.login);

export default authRoutes;
