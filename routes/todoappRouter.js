const express = require('express');
const router = express.Router();
const fs = require('fs');

const dataUsers = require('../data/data.json');

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const findUserWithId = dataUsers.find((data) => {
    return data.id == id;
  });
  res.send(findUserWithId);
});

router.post('/:id', (req, res) => {
  const id = req.params.id;
  const { activity, date, time } = req.body;

  const findUser = dataUsers.find((data) => {
    return data.id == id;
  });

  findUser.activities.push({
    activity,
    date,
    time,
  });

  fs.writeFileSync('data/data.json', JSON.stringify(dataUsers));
  res.send(findUser);
});

module.exports = router;
