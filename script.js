// undervisere:
// const undervisere = ["Anders", "Alan", "Stine", "Lau"];

// // console.log(undervisere);

// const section = document.querySelector("section");

// undervisere.forEach(visNavne);

// function visNavne(elm) {
//   console.log(elm);
//   section.innerHTML += `<p>${elm} er sød</p>`;
// }

// playliste:
// const tracks = ["dracula", "Thriller", "cardigan", "seven", "dashboard", "orbiter", "dan", "august", "peace", "asleep"];

// console.log(tracks);

// const ul = document.querySelector("ul");

// tracks.forEach(playliste);

// function playliste(tracks) {
//   console.log(tracks);
//   ul.innerHTML += `<p>${tracks}</p>`;
// }

// objekt øvelse:
const Movie = {
  name: "obsession",
  genre: "horror",
  length: "1t49m",
  director: "Curry Barker",
  image: "Screenshot 2026-09-21 at 14.35.50.png",
};
const card = document.querySelector(".card");

card.innerHTML = `
<h2>${Movie.name}<h2/>
<img src="${Movie.image}" alt="${Movie.name}">
<h3>genre: ${Movie.genre}<h3>
<p>lenght: ${Movie.length}<p>
<p>director: ${Movie.director}<p>
`;
