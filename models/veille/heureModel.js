import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const HeureSchema = new Schema({
  heure: {
    type: String,
  },
});
