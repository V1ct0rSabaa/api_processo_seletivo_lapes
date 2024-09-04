import { Router } from 'express';
import empresaController from '../controllers/empresaController';

const empresaRoutes = Router();

empresaRoutes.route("/empresas").post((req, res) => empresaController.create(req, res));

empresaRoutes.route("/empresas").get((req, res) => empresaController.getAll(req, res));

empresaRoutes.route("/empresas/:id").get((req, res) => empresaController.get(req, res));

empresaRoutes.route("/empresas/:id").patch((req, res) => empresaController.update(req, res));

empresaRoutes.route("/empresas").delete((req, res) => empresaController.delete(req, res));

export default empresaRoutes;
