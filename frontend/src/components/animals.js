import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Animals = () => {
  const [animals, setAnimals] = useState(null);

  useEffect(() => {
    fetchAnimals();
  }, []);

  // fetch animals belongs to that owner
  const fetchAnimals = async () => {
    try {
      const fetchItems = await fetch("api/animals");
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
  //   delete button handler TODO: error handling
  const handleDeleteAnimal = (id) => {
    fetch(`/api/delete/${id}`, {
      method: "DELETE",
    });
    // fetchAnimals();
  };
  return (
    <div className="container">
      <h2>Animals</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Animal Name</th>
            <th scope="col">Animal Type</th>
            <th scope="col">Owner name</th>
            <th scope="col">View Owner</th>
            <th scope="col">Delete Animal</th>
          </tr>
        </thead>
        <tbody>
          {/* If animals true than execute loop */}
          {animals &&
            animals.map((animal) => (
              //   generate rows in the table for each animal
              <tr key={animal.aid}>
                <td>{animal.aname}</td>
                <td>{animal.type}</td>
                <td>{animal.oname}</td>
                <td>
                  {/* Create link for each owner */}
                  <Link to={`owner/${animal.oid}`}>view</Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteAnimal(animal.aid)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default Animals;
