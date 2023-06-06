const router = require('express').Router();
const { Pub } = require('../.models');

// The `/api/products` endpoint

// get all breweries
  router.get('/', (req, res) => {
    // find all breweries
    

    Breweries.findAll({
      attributes: ['id', 'name', 'address', 'zip_code', 'link', 'city'],
      include:[
        {
          model: Pub,
          attributes: ['city_name']
        }
      ]
    })
    .then(BreweriesData => res.json(BreweriesData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});




// get one product
router.get('/:id', (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
Breweries.findOne({
  where:{
    id: req.params.id
  },
  attributes: ['name', 'address', 'zip_code', 'link', 'city'],
  include:[
    {
      model: Pub,
      attributes: ['city_name']
    }
  ]
})
  .then(BreweriesData => {
    if (!BreweriesData) {
      res.status(404).json({ message: 'No Brewery found with this id' });
      return;
    }
    res.json(BreweriesData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

});



// create new Brewery
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update Brewery
router.put('/:id', (req, res) => {
  // update Brewery data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })



  ///////////////////////////////////////////////////////////////////////

    .then((product) => {
      if (req.body.tagIds && req.body.tagIds.length) {

        ProductTag.findAll({
          where: { product_id: req.params.id }
        }).then((productTags) => {
          // create filtered list of new tag_ids
          const productTagIds = productTags.map(({ tag_id }) => tag_id);
          const newProductTags = req.body.tagIds
            .filter((tag_id) => !productTagIds.includes(tag_id))
            .map((tag_id) => {
              return {
                product_id: req.params.id,
                tag_id,
              };
            });

          // figure out which ones to remove
          const productTagsToRemove = productTags
            .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
            .map(({ id }) => id);
          // run both actions
          return Promise.all([
            ProductTag.destroy({ where: { id: productTagsToRemove } }),
            ProductTag.bulkCreate(newProductTags),
          ]);
        });
      }

      return res.json(product);
    })
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

//////////////////////////////////////////////////////////////



router.delete('/:id', (req, res) => {
  // delete one product by its `id` value

  Product.destroy({
    where:{
      id: req.params.id
    }
  })
  .then(ProductData => {
    if (!ProductData){
      res.status(404).json({message: 'No product found with this id'});
      return;
    }
    res.json(ProductData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


module.exports = router;