import mongoose, { Document, Schema } from 'mongoose';

interface IEmpresa extends Document {
  state_code?: string;
  latitude?: string;
  longitude?: string;
  zip_code?: string;
  _id: mongoose.Types.ObjectId;
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

// Crie o esquema
const empresaSchema: Schema = new Schema({
  state_code: { type: String },
  latitude: { type: String },
  longitude: { type: String },
  zip_code: { type: String },
  _id: { type: Schema.Types.ObjectId, auto: true },
  city: { type: String, required: true },
  name: { type: String, required: true },
  labels: { type: Number },
  founded_at: { type: String },
  closed_at: { type: String },
  first_funding_at: { type: String },
  last_funding_at: { type: String },
  relationships: { type: Number },
  funding_rounds: { type: Number },
  funding_total_usd: { type: String },
  milestones: { type: Number },
  is_CA: { type: Number },
  is_NY: { type: Number },
  is_MA: { type: Number },
  is_TX: { type: Number },
  is_otherstate: { type: Number },
  category_code: { type: String },
  is_software: { type: Number },
  is_web: { type: Number },
  is_mobile: { type: Number },
  is_enterprise: { type: Number },
  is_advertising: { type: Number },
  is_gamesvideo: { type: Number },
  is_ecommerce: { type: Number },
  is_biotech: { type: Number },
  is_consulting: { type: Number },
  is_othercategory: { type: Number },
  has_VC: { type: Number },
  has_angel: { type: Number },
  has_roundA: { type: Number },
  has_roundB: { type: Number },
  has_roundC: { type: Number },
  has_roundD: { type: Number },
  is_top500: { type: Number },
  status: { type: String, required: true }
});

const nomeCollection = 'startups';
const EmpresaModel = mongoose.model<IEmpresa>(nomeCollection, empresaSchema);

export default EmpresaModel;
