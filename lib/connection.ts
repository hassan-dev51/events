import mongoose from "mongoose";

const mongodb_uri = process.env.MONGO_DB_URI;

// we will cache our database we do it to reduce load on database.

let cached = (global as any).mongoose || { conn: null, promise: null };

// function to connect with database.

export const connectToDatabase = async () => {
  if (!mongodb_uri) {
    throw new Error("MongoDB connection is required");
  }

  if (cached.conn) {
    return cached.conn;
  } else {
    cached.promise =
      cached.promise ||
      mongoose.connect(mongodb_uri, {
        dbName: "events",
        bufferCommands: false,
      });

    cached.conn = await cached.promise;
    return cached.conn;
  }
};
