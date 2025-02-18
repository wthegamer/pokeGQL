import { useState } from "react";

// this only maintains the entered list of pokemon while the user is on the page
const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const [formData, setFormData] = useState({
    pokemon_name: "",
    nick_name: "",
    id: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setPokemonList([...pokemonList, formData]);

    setFormData({ pokemon_name: "", nick_name: "", id: "" });
  };

  return (
    <div>
      <h1 className="h1 ms-3">List Your Favorite Pokemon</h1>
      <p className="lead ms-3">Enter their details to add to the table</p>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Pokemon Name:</label>
            <input
              className="form-control"
              type="text"
              id="pokemon_name"
              name="pokemon_name"
              value={formData.pokemon_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Nick Name:</label>
            <input
              className="form-control"
              type="text"
              id="nick_name"
              name="nick_name"
              value={formData.nick_name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">ID:</label>
            <input
              className="form-control"
              type="number"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
              required
            />
          </div>

          <button className="btn btn-primary mt-3 mb-3" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="container">
        <h2>Pokemon List</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Pokemon name</th>
              <th>Nick name</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {pokemonList.map((pokemon) => (
              <tr key={pokemon.pokemon_name}>
                <td>{pokemon.pokemon_name}</td>
                <td>{pokemon.nick_name}</td>
                <td>{pokemon.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PokemonList;
