import mongoose from 'mongoose';
import {UserSchema} from '../../models/login/userModel';


const User = mongoose.model('User', UserSchema);

export const addlike = (req, res) => {
    User.findByIdAndUpdate(req.body.userId, { $push: { likes: { name: req.body.name, firstName: req.body.firstName, imageUrl: req.body.imageUrl, age:req.body.age } } }, (err) => {
        if(err) {
            res.status(500).json({error: err});
        } else {
            res.status(200).json({message: "Like ajouté avec succès"})
        }
    });

}

export const getLike = (req, res) => {
    console.log(req.query.userId);
    User.findOne({ _id: req.query.userId }, 'likes')
    .then(likes => res.json(likes))
    .catch(err => res.status(404).json({ error: 'No likes found' }))

}