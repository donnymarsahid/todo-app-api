const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');
app.use('/login', loginRouter);
app.use('/register', registerRouter);

app.listen(PORT, () => {
  console.log(`Server is oke PORT : ${PORT}`);
});

module.exports = app;
