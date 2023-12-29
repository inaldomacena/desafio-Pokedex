const pokeDetailApi = {};

// Página de detalhes do Pokémon
function exibirDetalhesPokemon() {
  const urlParams = new URLSearchParams(window.location.search);
  const pokemonId = urlParams.get("id");
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => DetailsPokePage(jsonBody))
    .catch((error) => console.log(error));
  
    function DetailsPokePage(detailsPoke) {
  
      const pokemonsDet = new BaseStats();
    
      pokemonsDet.name = detailsPoke.name;
      pokemonsDet.number = detailsPoke.id;
    
      const types = detailsPoke.types.map((typeSlot) => typeSlot.type.name);
      const [type] = types;

      pokemonsDet.types = types;
      pokemonsDet.type = type;
    
    
  pokemonsDet.hp = detailsPoke.stats[0].base_stat;
  pokemonsDet.attack = detailsPoke.stats[1].base_stat;
  pokemonsDet.defense = detailsPoke.stats[2].base_stat;
  pokemonsDet.speed = detailsPoke.stats[3].base_stat;
  
  return exibirDetalhes(pokemonsDet);
}


function exibirDetalhes(pokemon) {
    const detailContainer = document.getElementById("cardList");
    
    const detail = document.createElement("div");
    detail.classList.add("detail");
    detail.innerHTML =  `
<div id="base" class="tabcontent" style="display: none;">                             
<ul class="baseStates">
      <p>HP</p>
      <li>
        <div>
            <span class="bar_stats">${pokemon.hp}</span>
            <progress class="hp" value="${pokemon.hp}" max="200"></progress>
          </div>
      </li>
    </ul>

    <ul class="baseStates">
      <p>Attack</p>
        <li>
          <div>
            <span class="baseStates">${pokemon.attack}</span>
            <progress value="${pokemon.attack}" max="200"></progress>
          </div>
        </li>
    </ul>

      <ul class="baseStates">
      <p>Defense</p>
        <li>
          <div>
            <span class="bar_stats">${pokemon.defense}</span>
            <progress value="${pokemon.defense}" max="200"></progress>
          </div>
        </li>
      </ul>

      

      <

      <ul class="baseStates">
      <p>Speed</p>
        <li>
          <div>
          <span class="bar_stats">${pokemon.speed}</span>
            <progress value="${pokemon.speed}" max="200"></progress>
        </div>
        </li>
      </ul>
    </div>

      `

      detailContainer.appendChild(detail);

    }

      exibirDetalhesPokemon();

