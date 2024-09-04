import mongoose, { Document, Schema } from 'mongoose';

interface IEmpresa extends Document {
  title: string;
  author: string;
  description: string;
  budget: number;
}

const EmpresaSchema = new Schema<IEmpresa>(
  {
    title: { type: String, required: true},
    author: { type: String, required: true},
    description: { type: String, required: true},
    budget: { type: Number, required: true},
  },
);

const EmpresaModel = mongoose.model<IEmpresa>('Empresa', EmpresaSchema);

export default EmpresaModel;
