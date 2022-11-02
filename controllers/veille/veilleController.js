import mongoose from "mongoose";
import { VeilleSchema } from "../../models/veille/veilleModel";

const Truck = mongoose.model("veille", VeilleSchema);

export const getVeille = (req, res) => {
  Truck.find({}, (err, Truck) => {
    if (err) {
      res.send(err);
    }
    res.json(Truck);
  });
};

export const updateVeille = (req, res) => {
  Truck.findOneAndUpdate(
    { _id: req.params.TruckId },
    req.body,
    { new: true },
    (err, Truck) => {
      if (err) {
        res.send(err);
      }
      res.json(Truck);
    }
  );
};
