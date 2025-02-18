import { useQuery } from "@tanstack/react-query";
import { request, gql } from "graphql-request";
import { endpoint } from "./service/PokemonEndpoint";

const GET_SPRITE_QUERY = gql`
  query GetSprite($id: Int!) {
    pokemon_v2_pokemonformsprites_by_pk(id: $id) {
      sprites
      pokemon_v2_pokemonform {
        name
        pokemon_v2_pokemon {
          pokemon_v2_pokemonabilities {
            pokemon_v2_ability {
              name
            }
          }
        }
      }
    }
  }
`;

export const ImageWithContent = ({ id, index }) => {

  const { data, isLoading, error } = useQuery({
    queryFn: async () => {
      const response = await request(endpoint, GET_SPRITE_QUERY, {
        id: parseInt(id),
      });
      return response;
    },
    queryKey: ["Pokemon", `${id}`],
    staleTime: 900000,
  });

  if (isLoading)
    return (
      <div className="col-sm-4 d-flex flex-column pt-3">
        <h2 className="h2 align-self-center">Loading</h2>
      </div>
    );

  if (error) return <h2 className="h2">Error</h2>;
  const withBackground =
    index % 2 === 0
      ? "col-sm-4 d-flex flex-column pt-3"
      : "col-sm-4 d-flex flex-column pt-3 text-bg-light";
      
  return (
    <div className={withBackground}>
      <img
        src={data.pokemon_v2_pokemonformsprites_by_pk.sprites.front_default}
        alt={
          data.pokemon_v2_pokemonformsprites_by_pk.pokemon_v2_pokemonform.name
        }
        className="w-75 mb-1 align-self-center"
      />
      <p>
        {data.pokemon_v2_pokemonformsprites_by_pk.pokemon_v2_pokemonform.name.toUpperCase()}
      </p>
      <p className="lead">Abilities:</p>
      <div className="row">
        {data.pokemon_v2_pokemonformsprites_by_pk.pokemon_v2_pokemonform.pokemon_v2_pokemon.pokemon_v2_pokemonabilities.map(
          (ability) => (
            <p key={ability.pokemon_v2_ability.name}>{ability.pokemon_v2_ability.name}</p>
          ),
        )}
      </div>
    </div>
  );
};
