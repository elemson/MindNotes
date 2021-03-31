// import firebase from 'react-native-firebase';
import * as firebase from 'firebase';
// import "firebase/firestore";
import config from '../firebaseConfig'


if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}

const dbf = firebase.firestore().collection("note");

async function getNote() {
  var noteList = [];

  var snapshot = await dbf
    .orderBy('createdAt')
    .get()

  snapshot.forEach((doc) => {
    const noteItem = doc.data();
    noteItem.id = doc.id;
    noteList.push(noteItem);
  });

  console.log(noteList)
}


const getAll = () => {
  return dbf;
};

const create = (note) => {
  return dbf.add(note);
};

const update = (key, note) => {
  return dbf.child(key).update(note);
};

const remove = (key) => {
  return dbf.child(key).remove();
};

const removeAll = () => {
  return dbf.remove();
};

export default {
  getAll,
  getNote,
  create,
  update,
  remove,
  removeAll,
};