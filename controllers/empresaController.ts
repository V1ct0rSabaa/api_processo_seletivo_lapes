import { Request, Response } from 'express';
import EmpresaModel from '../models/empresa';

interface IEmpresa {
  state_code?: string;
  latitude?: string;
  longitude?: string;
  zip_code?: string;
  _id: number;
  city: string;
  name: string;
  labels?: number;
  founded_at?: string;
  closed_at?: string;
  first_funding_at?: string;
  last_funding_at?: string;
  relationships?: number;
  funding_rounds?: number;
  funding_total_usd?: string;
  milestones?: number;
  is_CA?: number;
  is_NY?: number;
  is_MA?: number;
  is_TX?: number;
  is_otherstate?: number;
  category_code?: string;
  is_software?: number;
  is_web?: number;
  is_mobile?: number;
  is_enterprise?: number;
  is_advertising?: number;
  is_gamesvideo?: number;
  is_ecommerce?: number;
  is_biotech?: number;
  is_consulting?: number;
  is_othercategory?: number;
  has_VC?: number;
  has_angel?: number;
  has_roundA?: number;
  has_roundB?: number;
  has_roundC?: number;
  has_roundD?: number;
  is_top500?: number;
  status: string;
}

const empresaController = {
  // POST
  create: async (req: Request, res: Response) => {
    try {
      const empresa: IEmpresa = {
        state_code: req.body.state_code,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        zip_code: req.body.zip_code,
        _id: req.body._id,
        city: req.body.city,
        name: req.body.name,
        labels: req.body.labels,
        founded_at: req.body.founded_at,
        closed_at: req.body.closed_at,
        first_funding_at: req.body.first_funding_at,
        last_funding_at: req.body.last_funding_at,
        relationships: req.body.relationships,
        funding_rounds: req.body.funding_rounds,
        funding_total_usd: req.body.funding_total_usd,
        milestones: req.body.milestones,
        is_CA: req.body.is_CA,
        is_NY: req.body.is_NY,
        is_MA: req.body.is_MA,
        is_TX: req.body.is_TX,
        is_otherstate: req.body.is_otherstate,
        category_code: req.body.category_code,
        is_software: req.body.is_software,
        is_web: req.body.is_web,
        is_mobile: req.body.is_mobile,
        is_enterprise: req.body.is_enterprise,
        is_advertising: req.body.is_advertising,
        is_gamesvideo: req.body.is_gamesvideo,
        is_ecommerce: req.body.is_ecommerce,
        is_biotech: req.body.is_biotech,
        is_consulting: req.body.is_consulting,
        is_othercategory: req.body.is_othercategory,
        has_VC: req.body.has_VC,
        has_angel: req.body.has_angel,
        has_roundA: req.body.has_roundA,
        has_roundB: req.body.has_roundB,
        has_roundC: req.body.has_roundC,
        has_roundD: req.body.has_roundD,
        is_top500: req.body.is_top500,
        status: req.body.status
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





