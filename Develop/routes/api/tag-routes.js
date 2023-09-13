const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const results = await Tag.findAll();
  res.json(results);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const results = await Tag.findOne({ where: { id: req.params.id } });
  if (results === null) {
    res.json("Not found");
  } else {
    res.json(results);
  }

});

router.post('/', (req, res) => {
  // create a new tag
  // XXXXXXXXXXXX


});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  // XXXXXXXXXXXXXX


});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  // XXXXXXXXXXXXX

  
});

module.exports = router;
