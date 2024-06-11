"use server";

import { connectToDb } from "@/db";
import Click from "@/models/Click.model";
import { revalidatePath } from "next/cache";

export const getCount = async () => {
  try {
    await connectToDb();
    const click = await Click.findOne({});

    if (!click) {
      await Click.create({});
    }

    const count = click?.clickCount || 0;

    return { count };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const increaseCounter = async () => {
  try {
    await connectToDb();
    const click = await Click.findOneAndUpdate(
      {},
      { $inc: { clickCount: 1 } },
      { new: true }
    );

    if (!click) {
      await Click.create({});
    }

    const count = click?.clickCount || 0;
    revalidatePath("/");
    return { count };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
