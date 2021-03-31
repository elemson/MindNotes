import firebase from "./UserService";
import firebaseConfig from '../firebaseConfig'

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.ref("/note");

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