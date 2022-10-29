const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const apiRoutes = require('./routes/api');
const errorRoutes = require('./routes/error');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/admin', adminRoutes);
app.use('/api', apiRoutes);
app.use(shopRoutes);
app.use(errorRoutes);

app.listen(3000);
