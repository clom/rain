import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('GET OK.');
});

router.post('/', (req, res, next) => {
  res.send('POST OK.');
})

export default router;