const PokemonRow = ({ pokemon }) => {
  return (
    <tr>
      <td>{pokemon.id}</td>
      <td>{pokemon.name}</td>
      <td>{pokemon.types.join(", ")}</td>
      <td id="sprite">
        <div className="sprite">
          <img src={pokemon.sprite} alt={pokemon.name} />
        </div>
      </td>
    </tr>
  );
};

export default PokemonRow;
