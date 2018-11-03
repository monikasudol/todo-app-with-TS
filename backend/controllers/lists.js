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
  const id = req.body;
  const idToRemoveList = await listsModel.deleteList(id.id);
  res.send({ idToRemoveList });
};

const handleEditTitle = async (req, res) => {  
  const listDetails = req.body;
  const changedList = await listsModel.changeTitle(listDetails.title, listDetails.id);
  res.send(changedList);
};

module.exports = {
  handleAddList,
  handleGetLists,
  handleRemoveList,
  handleEditTitle
};
