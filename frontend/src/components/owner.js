import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Owner = ({ match }) => {
  // Create state for owner
  const [owner, setOwner] = useState(null);
  // Create state for animals for current owner
  const [animals, setAnimals] = useState(null);

  useEffect(() => {
    fetchOwner();
    fetchAnimals();
  }, []);

  // fetch owner by id
  const fetchOwner = async () => {
    try {
      const fetchItem = await fetch(`/api/owner/${match.params.id}`);
      if (!fetchItem.ok) {
        // check if any error to fetch data
        throw Error("Could not fetch the date");
      }
      const owner = await fetchItem.json();
      setOwner(owner[0]);
    } catch (error) {
      console.log(error);
    }
  };
  // fetch animals belongs to that owner
  const fetchAnimals = async () => {
    try {
      const fetchItems = await fetch(`/api/owner/animals/${match.params.id}`);
      if (!fetchItems.ok) {
        // check if any error to fetch data
        throw Error("Could not fetch the date");
      }
      const animals = await fetchItems.json();
      setAnimals(animals);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      {/* If owner true than execute right side */}
      <h1>Owner name: {owner && owner.name}</h1>
      <h2 className="text-center">Animals list</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Animal Name</th>
            <th scope="col">Animal Type</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop through animals and create records */}
          {/* If animals true than execute loop */}
          {animals &&
            animals.map((animal) => (
              //   generate rows in the table for each animal
              <tr key={animal.aid}>
                <td>{animal.aname}</td>
                <td>{animal.type}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default Owner;
