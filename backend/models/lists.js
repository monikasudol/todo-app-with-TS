var Datastore = require('nedb')

db = new Datastore({
  filename: 'path/to/datafile',
  autoload: true,
  onload: err => {
    if (err) {
      console.error('Error while loading db', err)
    } else {
      console.log('database success!')
    }
  }
});

db.lists = new Datastore({
  filename: 'path/to/lists',
  autoload: true,
  onload: err => {
    if (err) {
      console.error('Error while loading db', err)
    } else {
      console.log('database lists success!')
    }
  }
});

let lists = [];

lists = db.lists.find({}, function (err, allLists) {
  lists = allLists;
});

const refreshLists = () => {
  db.lists.find({}, function (err, allLists) {
    lists = allLists;
  });
}

const addList = async (list) => {
  await db.lists.insert(list, function (err, newDoc) {

    if (err) {
      console.log(err)
    }
    refreshLists();
  });

  return list;
};

const deleteList = async (id) => {
  db.lists.remove({ _id: id }, {}, function (err, numRemoved) {
    if (err) {
      console.log(err)
    }
    refreshLists();
  });
  return id;
};

const getLists = async () => {
  return lists;
};

const changeTitle = async (title, id) => {
  await db.lists.update({ _id: id }, { $set: { title: title } }, {}, function (err, numReplaced) {
    if (err) {
      console.log(err)
    }
    refreshLists();
  });
  return { title, id };
};

module.exports = {
  addList,
  deleteList,
  getLists,
  changeTitle
};
