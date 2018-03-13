import express from 'express';
import articlesController from "../controllers/articlesController";

const router = express.Router();

// Basic routes
router.get('/articles', articlesController.get);

export default router;