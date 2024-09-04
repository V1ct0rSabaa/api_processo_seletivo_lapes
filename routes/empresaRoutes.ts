import { Router } from 'express';
import empresaController from '../controllers/empresaController';

const empresaRoutes = Router();

empresaRoutes.route("/startups").post((req, res) => empresaController.create(req, res));

empresaRoutes.route("/startups").get((req, res) => empresaController.getAll(req, res));

empresaRoutes.route("/startups/:id").get((req, res) => empresaController.get(req, res));

empresaRoutes.route("/startups/:id").patch((req, res) => empresaController.update(req, res));

empresaRoutes.route("/startups/:id").delete((req, res) => empresaController.delete(req, res));

export default empresaRoutes;
