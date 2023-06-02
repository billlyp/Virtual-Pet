import config from './config.js';
import Postgres from 'pg';

const sql = new Postgres.Client(config);
sql.connect();

export async function newPet(pet) {
  const q = 'INSERT INTO petDatabase (pet) VALUES ($1);';
  await sql.query(q, [pet]);
  return getPetID(pet.timeCreated);
}

async function getPetID(time) {
  const q = 'SELECT * FROM petDatabase';
  const result = await sql.query(q);
  for (const row of result.rows) {
    if (row.pet.timeCreated === time) {
      return row.id;
    }
  }
}

export async function loadPet(id) {
  const q = 'SELECT * FROM petDatabase WHERE id = $1;';
  const result = await sql.query(q, [id]);
  if (result.rows.length === 0) {
    return undefined;
  } else {
    return (result.rows[0].pet);
  }
}

export async function savePet(id, pet) {
  const q = 'UPDATE petDatabase SET pet = $1 WHERE id = $2;';
  await sql.query(q, [pet, id]);
}
