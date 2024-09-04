import { Request, Response } from 'express';
import EmpresaModel from '../models/empresa';

interface IEmpresa {
  title: string;
  author: string;
  description: string;
  budget: number;
}

const empresaController = {
  // POST
  create: async (req: Request, res: Response) => {
    try {
      const empresa: IEmpresa = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        budget: req.body.budget,
      };
      const response = await EmpresaModel.create(empresa);
      res.status(201).json({ response, msg: "Empresa criada com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Erro ao criar empresa" });
    }
  },
  // GET
  getAll: async (req: Request, res: Response) => {
    try {
      const empresas = await EmpresaModel.find();
      res.json(empresas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Erro ao obter empresas" });
    }
  },
  // GET
  get: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const empresa = await EmpresaModel.findById(id);

      if (!empresa) {
        return res.status(404).json({ msg: "Empresa não encontrada" });
      }

      res.json(empresa);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Erro ao obter empresa" });
    }
  },
  // PATCH
  update: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const updates = req.body;

      const updatedEmpresa = await EmpresaModel.findByIdAndUpdate(id, updates, { new: true });

      if (!updatedEmpresa) {
        return res.status(404).json({ msg: "Empresa não encontrada" });
      }

      res.status(200).json({ updatedEmpresa, msg: "Empresa atualizada com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Erro ao atualizar empresa" });
    }
  },

  // DELETE
  delete: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const empresa = await EmpresaModel.findById(id);

      if (!empresa) {
        return res.status(404).json({ msg: "Empresa não encontrada" });
      }

      const deletedEmpresa = await EmpresaModel.findByIdAndDelete(id);
      res.status(200).json({ deletedEmpresa, msg: "Empresa excluída com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Erro ao excluir empresa" });
    }
  },
};
export default empresaController;





