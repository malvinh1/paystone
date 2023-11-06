import express from 'express';
import { House, Owner } from '../models/houseOwnershipModel';

const houseOwnershipRouter = express.Router();

// get all house
houseOwnershipRouter.get('/house', async (req, res) => {
  try {
    const house = await House.find().populate('owners');
    res.json(house);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get all owner
houseOwnershipRouter.get('/owner', async (req, res) => {
  try {
    const owner = await Owner.find().populate('houses');
    res.json(owner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// create owner
houseOwnershipRouter.post('/create-owner', async (req, res) => {
  try {
    const newOwner = await Owner.create({
      name: req.body.name,
      age: req.body.age,
      houses: req.body.houses,
    });

    await House.updateMany({ _id: newOwner.houses }, { $push: { owners: newOwner._id } });

    res.send(newOwner);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// create a house
houseOwnershipRouter.post('/create-house', async (req, res) => {
  try {
    const newHouse = await House.create({
      address: {
        street: 'Anti Hero 99',
        postal_code: '98412',
      },
    });

    res.status(201).send(newHouse);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// delete a house
houseOwnershipRouter.delete('/delete-house/:id', async (req, res) => {
  try {
    const house = await House.findOne({ _id: req.params.id });
    await House.deleteOne({ _id: req.params.id });

    await Owner.updateMany({ _id: house.owners }, { $pull: { houses: house._id } });

    res.json({ message: 'House deleted successfully' });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// delete an owner
houseOwnershipRouter.delete('/delete-owner/:id', async (req, res) => {
  try {
    const owner = await Owner.findOne({ _id: req.params.id });
    await Owner.deleteOne({ _id: req.params.id });

    await House.updateMany({ _id: owner.houses }, { $pull: { owners: owner._id } });

    res.json({ message: 'Owner deleted successfully' });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

export default houseOwnershipRouter;
