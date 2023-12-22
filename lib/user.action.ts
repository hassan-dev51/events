"use server";

import { CreateUserParams } from "@/interfaces";
import { handleError } from "./utils";
import { connectToDatabase } from "./connection";
import User from "@/app/db/models/UserSchema";

export const createUser = async (user: CreateUserParams) => {
  try {
    //create connection with database.
    await connectToDatabase();
    //create new doc in database.
    const newUser = await User.create(user);
    //return user.
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};
