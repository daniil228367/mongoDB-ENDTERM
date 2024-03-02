const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

mongoose.connect('mongodb+srv://danilmukhanov21:c5YFBkDKQRvPzTtQ@cluster0.kqx7dci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => {
  console.error('MongoDB Connection Error:', err);
  process.exit(1);
});

app.use(express.json());
app.use(cors());

const laptopRoutes = require('./routes/laptopRoutes');
const orderRoutes = require('./routes/orderRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

app.use('/api', laptopRoutes);


app.use('/api', orderRoutes);
app.use('/api', reviewRoutes);

app.get('/', (req, res) => {
  res.render('index'); 
});


app.get('/crud', (req, res) => {
  res.render('crud'); 
});

app.get('/laptops', (req, res) => {
  res.render('laptops'); 
});

app.get('/orders', (req, res) => {
  res.render('orders'); 
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
