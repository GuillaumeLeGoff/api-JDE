import mongoose from "mongoose";
import { VeilleSchema } from "../../models/veille/veilleModel";

const Veille = mongoose.model("veille", VeilleSchema);

export const getVeille = (req, res) => {
  Veille.find({}, (err, Veille) => {
    if (err) {
      res.send(err);
    }
    res.json(Veille);
  });
};

export const updateVeille = (req, res) => {
  console.log(req.params.veilleId);
  Veille.findOneAndUpdate(
    { _id: req.params.veilleId },
    req.body,
    { new: true },
    (err, Veille) => {
      if (err) {
        res.send(err);
      }
      res.json(Veille);
    }
  );
};
