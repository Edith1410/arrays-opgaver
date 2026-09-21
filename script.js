// const undervisere = ["Anders", "Alan", "Stine", "Lau"];

// // console.log(undervisere);

// const section = document.querySelector("section");

// undervisere.forEach(visNavne);

// function visNavne(elm) {
//   console.log(elm);
//   section.innerHTML += `<p>${elm} er sød</p>`;
// }

const tracks = ["dracula", "Thriller", "cardigan", "seven", "dashboard", "orbiter", "dan", "august", "peace", "asleep"];

console.log(tracks);

const ul = document.querySelector("ul");

tracks.forEach(playliste);

function playliste(tracks) {
  console.log(tracks);
  ul.innerHTML += `<p>${tracks}</p>`;
}
