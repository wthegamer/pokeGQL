import { ImageWithContent } from "../ImageWithContent";

const PokemonId = ["57", "149", "160"]; // the IDs/numbers of my favorite pokemon

const Home = () => {
  return (
    <div>
      <div className="ps-4 pb-4 text-bg-light mb-3">
        <h1 className="h1">What did I want to be when I grew up?</h1>
        <p className="lead">A Pokemon Trainer</p>
      </div>
      <div className="container">
        <h2 className='h2'>My Favorite pokemon</h2>
        <div className="row">
          {PokemonId.map((id, index) => ( 
            // I passed index here to guarantee that every other pokemon has a shaded background.
            // Ideally the ID values should always be numbers and go back and forth between even and odd.
            // However, I don't know the code owner of this api so it's possible that sometimes IDs would be out of order.
            <ImageWithContent key={id} id={id} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
