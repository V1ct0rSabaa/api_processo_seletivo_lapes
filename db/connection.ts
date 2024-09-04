import mongoose from 'mongoose';

async function connectDB(): Promise<void> {
    try {
        const connectionString = process.env.MONGO_CS // connection string tirada do .env
        if (!connectionString) {
            throw new Error('URL de conexão com o MongoDB inválida');
        }
          await mongoose.connect(connectionString);
        console.log('Conectado no mongodb');
    } catch (error) { console.error(`Erro: ${error}`); } 
}

export default connectDB;
