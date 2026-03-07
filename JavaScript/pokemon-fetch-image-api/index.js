

async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();         // .value will get the value typed inside the textbox
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);       // returns a promise

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();         // this also returns a promise, that's why we're using await
        
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";     // right now it's none, need to change it to block to show it
    }
    catch(error){
        console.error(error);
    }
}