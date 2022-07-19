const pokemon = [{"name":"bulbasaur","id":1,"types":["grass","poison"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png","created":false,"attack":49},{"name":"ivysaur","id":2,"types":["grass","poison"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png","created":false,"attack":62},{"name":"venusaur","id":3,"types":["grass","poison"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png","created":false,"attack":82},{"name":"charmander","id":4,"types":["fire"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png","created":false,"attack":52},{"name":"charmeleon","id":5,"types":["fire"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png","created":false,"attack":64},{"name":"charizard","id":6,"types":["fire","flying"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png","created":false,"attack":84},{"name":"squirtle","id":7,"types":["water"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png","created":false,"attack":48},{"name":"wartortle","id":8,"types":["water"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png","created":false,"attack":63},{"name":"blastoise","id":9,"types":["water"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png","created":false,"attack":83},{"name":"caterpie","id":10,"types":["bug"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png","created":false,"attack":30},{"name":"metapod","id":11,"types":["bug"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png","created":false,"attack":20},{"name":"butterfree","id":12,"types":["bug","flying"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png","created":false,"attack":45},{"name":"weedle","id":13,"types":["bug","poison"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png","created":false,"attack":35},{"name":"kakuna","id":14,"types":["bug","poison"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png","created":false,"attack":25},{"name":"beedrill","id":15,"types":["bug","poison"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png","created":false,"attack":90},{"name":"pidgey","id":16,"types":["normal","flying"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png","created":false,"attack":45},{"name":"pidgeotto","id":17,"types":["normal","flying"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png","created":false,"attack":60},{"name":"pidgeot","id":18,"types":["normal","flying"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png","created":false,"attack":80},{"name":"rattata","id":19,"types":["normal"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png","created":false,"attack":56},{"name":"raticate","id":20,"types":["normal"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png","created":false,"attack":81},{"name":"spearow","id":21,"types":["normal","flying"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png","created":false,"attack":60},{"name":"fearow","id":22,"types":["normal","flying"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png","created":false,"attack":90},{"name":"ekans","id":23,"types":["poison"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png","created":false,"attack":60},{"name":"arbok","id":24,"types":["poison"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png","created":false,"attack":95},{"name":"pikachu","id":25,"types":["electric"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png","created":false,"attack":55},{"name":"raichu","id":26,"types":["electric"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png","created":false,"attack":90},{"name":"sandshrew","id":27,"types":["ground"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png","created":false,"attack":75},{"name":"sandslash","id":28,"types":["ground"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png","created":false,"attack":100},{"name":"nidoran-f","id":29,"types":["poison"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png","created":false,"attack":47},{"name":"nidorina","id":30,"types":["poison"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png","created":false,"attack":62},{"name":"nidoqueen","id":31,"types":["poison","ground"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png","created":false,"attack":92},{"name":"nidoran-m","id":32,"types":["poison"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png","created":false,"attack":57},{"name":"nidorino","id":33,"types":["poison"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png","created":false,"attack":72},{"name":"nidoking","id":34,"types":["poison","ground"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png","created":false,"attack":102},{"name":"clefairy","id":35,"types":["fairy"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png","created":false,"attack":45},{"name":"clefable","id":36,"types":["fairy"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png","created":false,"attack":70},{"name":"vulpix","id":37,"types":["fire"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png","created":false,"attack":41},{"name":"ninetales","id":38,"types":["fire"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png","created":false,"attack":76},{"name":"jigglypuff","id":39,"types":["normal","fairy"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png","created":false,"attack":45},{"name":"wigglytuff","id":40,"types":["normal","fairy"],"img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png","created":false,"attack":70}]

let sorted = pokemon.sort((a, b) => {
    return a[attack] - b[attack];
});

console.log(sorted[0]);