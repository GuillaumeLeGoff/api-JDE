import mongoose from "mongoose";
import { ModeSchema } from "../../models/Mode/ModeModel";

const Mode = mongoose.model("Mode", ModeSchema);

export const addNewMode = (req, res) => {
  let newMode = new Mode(req.body);

  newMode.save((err, Mode) => {
    if (err) {
      res.send(err);
    }
    res.json(Mode);
  });
};

export const getModes = (req, res) => {
  Mode.find({}, (err, Mode) => {
    if (err) {
      res.send(err);
    }
    res.json(Mode);
  });
};

export const getModeWithId = (req, res) => {
  Mode.findById(req.params.modeId, (err, Mode) => {
    if (err) {
      res.send(err);
    }
    res.json(Mode);
  });
};

export const updateMode= (req, res) => {
    Mode.findOneAndUpdate(
      { _id: req.params.modeId },
      req.body,
      { new: true },
      (err, Mode) => {
        if (err) {
          res.send(err);
        }
        res.json(Mode);
      }
    );
  };
export const deleteMode = (req, res) => {
  Mode.remove({ _id: req.params.modeId }, (err, Mode) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted Mode" });
  });
};
