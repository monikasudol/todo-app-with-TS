var Datastore = require('nedb')

db = new Datastore({
  filename: 'path/to/lists',
  autoload: true,
  onload: err => {
    if (err) {
      console.error('Error while loading db', err)
    } else {
      console.log('first success!')
    }
  }
});

let lists = [];

lists = db.find({}, function (err, allLists) {
  lists = allLists;
});

const refreshLists = () => {
  db.find({}, function (err, allLists) {
    lists = allLists;
  });
}

const addList = async (list) => {
  await db.insert(list, function (err, newDoc) {

    if (err) {
      console.log(err)
    }
    refreshLists();
  });

  return list;
};

const deleteList = async (id) => {
  db.remove({ _id: id }, {}, function (err, numRemoved) {
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
  await db.update({ _id: id }, { $set: { title: title } }, {}, function (err, numReplaced) {
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
