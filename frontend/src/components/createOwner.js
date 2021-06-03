import { useState } from "react";

const CreateOwner = () => {
  // state for owner name
  const [ownerName, setUserName] = useState("");

  // on submint event handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const owner = { ownerName }; // object for post request
    fetch("/api/owner/new", {
      // create post request
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(owner),
    }).then(() => {
      console.log("new owner created");
    });
  };
  return (
    <div className="container">
      <h1>Create new owner</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="ownerName">Owner name</label>
          <input
            type="text"
            className="form-control"
            id="ownerName"
            required
            value={ownerName} // bind with state
            onChange={(e) => setUserName(e.target.value)} // listener for changing value in the field
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Owner
        </button>
      </form>
    </div>
  );
};

export default CreateOwner;
