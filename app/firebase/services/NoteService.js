import * as firebase from "firebase";
import {db, firebaseConfig} from '../firebaseConfig'

// Initialize Firebase
db.initializeApp(firebaseConfig)

const dbf = db.ref("/note");

const getAll = () => {
  return db;
};

const create = (note) => {
  return db.push(note);
};

const update = (key, note) => {
  return db.child(key).update(note);
};

const remove = (key) => {
  return db.child(key).remove();
};

const removeAll = () => {
  return db.remove();
};

export default {
  getAll,
  create,
  update,
  remove,
  removeAll,
};