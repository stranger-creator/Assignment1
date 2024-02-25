import { Router } from "express";
import { authorLogin, authorRegister, getAllAuthers } from "../controllers/auth.controller.js";
import validate from "../middlewares/validation.middleware.js";

const router = Router()

router.post("/register", validate, authorRegister)
router.post("/login", validate, authorLogin)
router.get("/author", getAllAuthers)

export default router