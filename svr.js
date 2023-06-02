import express from 'express';
import * as db from './petDb.js';
import validator from 'validator';

const app = express();
app.use(express.static('client'));

function asyncWrap(f) {
  return (req, res, next) => {
    Promise.resolve(f(req, res, next))
      .catch((e) => next(e || new Error()));
  };
}

async function newPet(req, res) {
  const id = await db.newPet(req.body);
  res.json(id);
}

async function loadPet(req, res) {
  const id = req.body.gameID;
  const pet = await db.loadPet(id);
  res.json(pet);
}

async function savePet(req, res) {
  const id = req.body.id;
  const pet = req.body.petToSave;
  await db.savePet(id, pet);
  res.json(pet);
}

async function checkIfPetExists(req, res) {
  const checkID = req.body.id;
  let check;
  if (validator.isUUID(checkID)) {
    const result = await db.loadPet(checkID);
    if (result !== undefined) {
      check = true;
    } else {
      check = false;
    }
  } else {
    check = false;
  }
  res.json(check);
}

app.post('/newPet', express.json(), asyncWrap(newPet));
app.post('/loadPet', express.json(), asyncWrap(loadPet));
app.post('/savePet', express.json(), asyncWrap(savePet));
app.post('/checkIfIDisCorrect', express.json(), asyncWrap(checkIfPetExists));

app.listen(8080);
