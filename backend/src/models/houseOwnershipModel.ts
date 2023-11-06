import mongoose from 'mongoose';

const HouseSchema = new mongoose.Schema({
  address: {
    street: String,
    postal_code: String,
  },
  owners: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Owner',
    },
  ],
});

const OwnerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  houses: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'House',
    },
  ],
});

const House = mongoose.model('House', HouseSchema);
const Owner = mongoose.model('Owner', OwnerSchema);

export { House, Owner };
