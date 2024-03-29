const listsModel = require('../models/lists');

const handleAddList = async (req, res) => {
  const list = req.body;
  const listToAdd = await listsModel.addList(list);
  res.send(listToAdd);
};

const handleGetLists = async (req, res) => {
  const lists = await listsModel.getLists();
  res.send(lists);
};

const handleRemoveList = async (req, res) => {
  const id = req.params.id;
  const idToRemoveList = await listsModel.deleteList(id);
  res.send({ idToRemoveList });
};

const handleEditTitle = async (req, res) => {  
  const listDetails = req.body;
  console.log(req);
  const changedList = await listsModel.changeTitle(listDetails.title, listDetails.id);
  res.send(changedList);
};

module.exports = {
  handleAddList,
  handleGetLists,
  handleRemoveList,
  handleEditTitle
};
