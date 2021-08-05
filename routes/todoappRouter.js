const express = require('express');
const router = express.Router();
const fs = require('fs');

const dataUsers = require('../data/data.json');

router.post('/:id', (req, res) => {
  const id = req.params.id;
  const { activity, date } = req.body;

  const findUser = dataUsers.find((data) => {
    return data.id == id;
  });

  findUser.activities.push({
    activity,
    date,
  });

  fs.writeFileSync('data/data.json', JSON.stringify(findUser));
  res.send({ message: 'success added activity' });
});

module.exports = router;
