const express=require('express');
const app = express();
  const cars = [
    { id: 1, name: 'BMW M3', price: 90000, amount:5 },
    { id: 2, name: 'BMW Z4 M Roadster', price: 56000, amount:8 },
    { id: 3, name: 'Audi Q5', price: 56000, amount:8 },
    { id: 4, name: 'Audi RSQ8', price: 50000, amount:8 },
    { id: 5, name: 'Tesla Cybertruck', price: 156000, amount:8 },
    { id: 6, name: 'Tesla Model Y', price: 56000, amount:8 },
    { id: 7, name: 'Tesla Roadster (2008)', price: 56000, amount:8 },
    { id: 8, name: 'Tesla Model Sr', price: 56000, amount:8 },
    { id: 9, name: 'Rover Grubu', price: 56000, amount:8 },
    { id: 10, name: 'Tata Motors', price: 56000, amount:8 },
  ];
  
  app.get('/cars/:id', (req, res) => {
    const id = req.params.id;
    const data = cars.find(item =>{
      return item.id=id;
    })
    res.json(data);
  });
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});




