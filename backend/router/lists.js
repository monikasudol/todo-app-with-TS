const Router = require('express').Router;
const listsController = require('../controllers/lists');

const router = Router();

router.use((req, res, next) => {
  console.log('List request');
  next();
});

router.get('/all', listsController.handleGetLists);
router.post('/edit-title', listsController.handleEditTitle);
router.post('/new', listsController.handleAddList);
router.post('/remove', listsController.handleRemoveList);

module.exports = router;
