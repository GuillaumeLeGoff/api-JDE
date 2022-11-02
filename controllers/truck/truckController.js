import mongoose from 'mongoose';
import { TruckSchema } from '../../models/truck/truckModel';

const Truck = mongoose.model('Truck', TruckSchema);

export const addNewTruck = (req, res) => {
    let newTruck = new Truck(req.body);

    newTruck.save((err, Truck) => {
        if (err) {
            res.send(err);
        }
        res.json(Truck);
    })
}

export const getTrucks = (req, res) => {
    Truck.find({}, (err, Truck) => {
        if (err) {
            res.send(err);
        }
        res.json(Truck);
    })
}

export const getTruckWithId = (req, res) => {
    Truck.findById(req.params.TruckId, (err, Truck) => {
        if (err) {
            res.send(err);
        }
        res.json(Truck);
    })
}

export const updateTruck = (req, res) => {
    Truck.findOneAndUpdate({ _id: req.params.TruckId }, req.body, { new: true }, (err, Truck) => {
        if (err) {
            res.send(err);
        }
        res.json(Truck);
    })
}

export const deleteTruck = (req, res) => {
    Truck.remove({ _id: req.params.TruckId }, (err, Truck) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted Truck' });
    })
}
