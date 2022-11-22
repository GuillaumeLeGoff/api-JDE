import mongoose from "mongoose";
import { HeureSchema } from "../../models/veille/heureModel";

const Heure = mongoose.model("Heure", HeureSchema);
const child_process = require('child_process');

export const getHeure = (req, res) => {
  console.log("heure");
  Heure.find({}, (err, Heure) => {
    if (err) {
      res.send(err);
    }
    res.json(Heure);
  });
};

export const updateHeure = (req, res) => {
  child_process.exec("timedatectl set-time "+ req.body.heure +":00");
  Heure.findOneAndUpdate(
    { _id: req.params.heureId },
    req.body,
    { new: true },
    (err, Heure) => {
      if (err) {
        res.send(err);
      }
      res.json(Heure);
    }
  );
};

