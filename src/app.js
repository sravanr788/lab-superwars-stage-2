// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    let randomval = Math.ceil(Math.random()*100);
    return randomval;
}

const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// console.log(obj)

// initialize players with image and strength
const initPlayers = (players) => {
    
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    
    for(let i =0;i<players.length;i++){
        let hero_or_villain = i%2==0 ? "hero" : "villain"
        console.log(getRandomStrength());
        let obj = {
            name : players[i],
            strength : getRandomStrength(), 
            image: `./images/super-${i+1}.png`,
            type: hero_or_villain,
        }

        detailedPlayers.push(obj);
    }
    
   
    return detailedPlayers;
}



const buildPlayers = (players, parameter) => { // for seperating heroes & villains
    let fragment = '';

    
    for(let i=0;i<players.length;i++){
        if(players[i].type == parameter){
            console.log(players[i].type)
            fragment += `<div class="player">
                            <img src="${players[i].image}" alt="">
                            <div class="name">${players[i].name}</div>
                            <div class="strength">${players[i].strength}</div>
                        </div>`
        }
        
    }

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here

    return fragment;
}
// Display players in HTML
const viewPlayers = (detailedPlayers) => {

    document.getElementById('heroes').innerHTML = buildPlayers(detailedPlayers, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(detailedPlayers, 'villain');

}

window.onload = () => {
    let detailedPlayers = initPlayers(PLAYERS) // passing array of string to convert to object of super heroes and villains
    // console.log(detailedPlayers)
    viewPlayers(detailedPlayers); // list of objects of heroes
}