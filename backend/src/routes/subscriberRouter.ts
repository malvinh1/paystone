import express from 'express';
import Subscriber from '../models/subscriberModel';
import getSubscriber from '../middlewares/getSubscriber';

const subscribersRouter = express.Router();

// Getting All
subscribersRouter.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Getting One
subscribersRouter.get('/:id', getSubscriber, (_, res: any) => {
  res.send(res.subscriber);
});

// Creating One
subscribersRouter.post('/', async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel,
  });

  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Updating One
subscribersRouter.patch('/:id', async (req, res) => {
  try {
    const updatedSubscriber = await Subscriber.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        name: req.body.name && req.body.name,
        subscribedToChannel: req.body.subscribedToChannel && req.body.subscribedToChannel,
      },
      {
        returnOriginal: false,
      },
    );
    res.json(updatedSubscriber);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// Deleting One
subscribersRouter.delete('/:id', async (req, res: any) => {
  try {
    await Subscriber.findByIdAndDelete({
      _id: req.params.id,
    });
    res.json({
      message: 'Successfully delete subscriber',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default subscribersRouter;
