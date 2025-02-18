import request, { gql } from "graphql-request";
import { endpoint } from "../service/PokemonEndpoint";
import { useQuery } from "@tanstack/react-query";
import { ImageWithContent } from "../ImageWithContent";

const GET_POKEMON_LIST = gql`
  query MyQuery {
    pokemon_v2_pokemonspecies(order_by: { id: desc }, limit: 12) {
      id
      name
    }
  }
`;

const NewestPokemon = () => {
  const { data, isLoading, error } = useQuery({
    queryFn: async () => {
      const response = await request(endpoint, GET_POKEMON_LIST);
      return response;
    },

    queryKey: ["Pokemon List"],
    staleTime: 900000,
  });
 
  if (isLoading)
    return (
      <div className="col-sm-4 d-flex flex-column pt-3">
        <h2 className="h2 align-self-center">Loading</h2>
      </div>
    );

  if (error) return <h2 className="h2">Error</h2>;

  return (
    <div>
      <h1 className="h1 ms-3">Newest Pokemon</h1>
      <div className="container">
        <div className="row">
          {data.pokemon_v2_pokemonspecies.map((pokemon, index) => (
            <ImageWithContent id={pokemon.id} key={pokemon.id} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewestPokemon;
