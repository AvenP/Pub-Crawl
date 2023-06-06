const router = require('express').Router();

// We are using hardcoded data here, where would our data usually come from? Remember - we haven't yet set up a database or Sequelize in our app.
const breweries = [
    {
      id: 1,
      dish_name: 'French Bread with Brie Cheese',
      description: 'French baguette with warm brie',
      has_nuts: false,
    },
    {
      id: 2,
      dish_name: 'Cheese Plate with Spanish Chorizo',
      description:
        'Manchego, Iberico, Cabrales, fig jam, grapes, pecans, and Spanich Chorizo',
      has_nuts: true,
    },
    {
      id: 3,
      dish_name: 'Fish Tacos',
      description:
        'Battered/fried fish, corn tortillas, fresh slaw with jalepenos and cilantro, pickled red onion',
      has_nuts: false,
    },
    {
      id: 4,
      dish_name: 'Tropical Fruit Salad',
      description: 'Guava, papaya, pineapple, mango, and star fruit',
      has_nuts: false,
    },

  ];

// get all brewery
router.get('/', async (req, res) => {
  res.render('all', {breweries});
});

// get one brewery
router.get('/Pub/:num', async (req, res) => {
  return res.render('brewery', breweries[req.params.num - 1]);
});

module.exports = router;