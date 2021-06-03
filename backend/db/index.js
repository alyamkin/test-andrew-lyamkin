import { open as sqliteOpen } from "sqlite";
import sqlite3 from "sqlite3";
const db = sqliteOpen({ filename: ":memory:", driver: sqlite3.Database });

const sql = (...args) =>
  db
    .then((dbo) => dbo.all(...args))
    .catch((e) => {
      return Promise.reject(e);
    });

export const rawSql = (...args) =>
  db
    .then((dbo) => dbo.run(...args))
    .catch((e) => {
      return Promise.reject(e);
    });

(async () => {
    // animal type
   await sql(`
    CREATE TABLE animal_type (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      type VARCHAR(255) CHECK( type IN ('cat', 'dog') ) NOT NULL DEFAULT 'cat'
    );
  `);

  await sql(`
    INSERT INTO animal_type (id, type)
    VALUES
      (1, 'cat'),
      (2, 'dog');
  `);

  // animals
  await sql(`
    CREATE TABLE animals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(255),
      type_id VARCHAR(255)
    );
  `);

  await sql(`
    INSERT INTO animals (id, name, type_id)
    VALUES
      (1, 'bobby', 1),
      (2, 'Banana Morty', 2),
      (3, 'Cat Morty', 1),
      (4, 'Dog Morty', 2),
      (5, 'Evil Morty', 2);
  `);

  // Owners
  await sql(`
    CREATE TABLE owners (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(255)
    );
  `);
  await sql(`
    INSERT INTO owners (id, name)
    VALUES
      (1, 'Jonh Doe'),
      (2, 'Jane Doe'),
      (3, 'Superman');
  `);

  // Work Order Assignees
  await sql(`
    CREATE TABLE owner_animal_assignees (
      owner_id INT NOT NULL,
      animal_id INT NOT NULL,
      PRIMARY KEY(owner_id, animal_id),
      FOREIGN KEY(owner_id) REFERENCES owners(id),
      FOREIGN KEY(animal_id) REFERENCES animals(id)
    );
  `);
  await sql(`
    INSERT INTO owner_animal_assignees (owner_id, animal_id)
    VALUES
      (3, 1),
      (3, 2),
      (1, 4);
  `);
})();

export default sql;
