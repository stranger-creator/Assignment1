import { Router } from "express";
import { createBlog, getAllBlogs, getBlogsByAuthorId } from "../controllers/blog.controller.js";
import authAuthor from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validation.middleware.js";

const router = Router()

router.post("/blogs", authAuthor, validate, createBlog)
router.get("/blogs", getAllBlogs)
router.get("/blogs/:emailId", getBlogsByAuthorId)

export default router