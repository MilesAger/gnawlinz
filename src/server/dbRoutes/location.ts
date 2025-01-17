import express from 'express';
import { Router } from 'express';

const locationRouter = Router();

// <-- Unsure if we need these -->
// import { Sequelize } from 'sequelize';
// import { db } from '../../db/index';
// import '../auth/auth';

// <-- DB Model -->
// import Location from '../../db/schemas/location';

// <-- middleware -->
locationRouter.use(express.json());
locationRouter.use(express.urlencoded({ extended: true }));

// ******************
// *** DB Queries ***
// ******************
// locationRouter.get('/random', (req, res) => {
//   Location.findAll({ order: Sequelize.literal('RAND()'), limit: 1 })
//     .then((location) =>
//       res.status(200).send(location))
//     .catch((err) => {
//       console.error('Error from Location.findall /location/random: ', err);
//     });
// });

export default locationRouter;
