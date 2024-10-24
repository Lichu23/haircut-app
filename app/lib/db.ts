import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL!;

interface MongooseConn {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}
//Creamos el cache para cuando conectemos a la base de datos utilizar los datos cacheados
// asi no se vuelve a regenerar la conexion con la bd que eso realentizaaria la app

let cached: MongooseConn = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

//function to connect another files with this database
export const connect = async () => {
  //If cached, returns the cached data.
  if (cached.conn) return cached.conn;

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "hairsalon-next-db",
      bufferCommands: false,
      connectTimeoutMS: 3000,
    });

  cached.conn = await cached.promise;
};
