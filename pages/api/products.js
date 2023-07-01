import mongoose from "mongoose";
import clientPromise from "@/lib/mongodb";
import { staticGenerationAsyncStorage } from "next/dist/client/components/static-generation-async-storage";

export default async function handle(req, res) {
  const { method } = req;
  if (method === 'POST') {
    const { title, description, price } = req.body;
    const productDoc = await Products.create({
      title, description, price,
    })
    res.json(productDoc);
  }
}
