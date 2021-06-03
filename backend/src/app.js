import express from "express";
import morgan from "morgan";

import sql from "../db/index.js";

const app = express();
const router = express.Router();

// router for all animals
router.get("/animals", async (req, res) => {
  const response = await sql(
    "SELECT a.id as aid,a.name as aname,o.id as oid,o.name as oname, at.type as type FROM animals as a left join owner_animal_assignees as oa on a.id=oa.animal_id left join owners o on o.id=oa.owner_id inner join animal_type as at on a.type_id=at.id"
  );
  return res.json(response);
});

// router for owner by id
router.get("/owner/:id", async (req, res) => {
  const response = await sql(`SELECT * FROM owners where id=${req.params.id}`);
  return res.json(response);
});

// router for animals by owner id
router.get("/owner/animals/:id", async (req, res) => {
  const response = await sql(
    `SELECT a.id as aid,a.name as aname,at.type as type FROM animals as a left join owner_animal_assignees as oa on a.id=oa.animal_id inner join animal_type as at on a.type_id=at.id where oa.owner_id=${req.params.id}`
  );
  return res.json(response);
});
// router for delete animal
router.delete("/delete/:id", async (req, res) => {
  const response = await sql(`DELETE FROM animals where id=${req.params.id}`);
  return res.send();
});
// router for add owner
router.post("/owner/new", async (req, res) => {
  //const response = await sql(`DELETE FROM animals where id=${req.params.id}`);
  return res.send("Done");
});

app.use(express.json());
//middleware for logging
app.use(morgan(":date[iso] :method :url :status"));
app.use("/api", router);

app.listen(4000);
