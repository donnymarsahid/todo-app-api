const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
const fs = require('fs');
const multer = require('multer');

const dataLogin = require('../data/login.json');
const { now } = require('moment');

const saltRounds = 10;
const uploadFile = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '--' + file.originalname);
  },
});

const upload = multer({ storage: uploadFile });

router.post('/', upload.single('image'), (req, res) => {
  const { username, password } = req.body;
  const image = req.file.filename;
  bcrypt.hash(password, saltRounds, (err, password) => {
    dataLogin.push({
      id: uuidv4(),
      username,
      password,
      image,
      create_at: moment(new Date()).format('LL'),
    });
    res.send({ message: 'success register' });
    fs.writeFileSync('data/login.json', JSON.stringify(dataLogin));
  });
});

module.exports = router;
