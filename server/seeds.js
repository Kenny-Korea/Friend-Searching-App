const mongoose = require('mongoose');
const UserFilter = require('./models/userFilter');

// mongoose
//   .connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true })
//   .then(() => {
//     console.log('MONGO CONNECTION OPEN!!');
//   })
//   .catch((err) => {
//     console.log('OH NO MONGO CONNECTION ERROR!!!!');
//     console.log(err);
//   });

// const p = new Product({
//   name: 'Ruby Grapefruit',
//   price: 1.99,
//   category: 'fruit',
// });
// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const seedProducts = [
//   {
//     name: 'Fairy Eggplant',
//     price: 1.0,
//     category: 'vegetable',
//   },
//   {
//     name: 'Organic Gooddess Melon',
//     price: 4.99,
//     category: 'fruit',
//   },
//   {
//     name: 'Organic Mini Seedless Watermelon',
//     price: 3.99,
//     category: 'fruit',
//   },
//   {
//     name: 'Organic Celery',
//     price: 1.5,
//     category: 'vegetable',
//   },
//   {
//     name: 'Chocolate Whole Milk',
//     price: 2.69,
//     category: 'dairy',
//   },
// ];

// Product.insertMany(seedProducts)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
