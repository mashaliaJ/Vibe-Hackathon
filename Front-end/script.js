let recipes = [
  { name: "Ugali & Sukuma Wiki", img: "images/ugali.jpg", desc: "Kenyan staple dish." },
  { name: "Nyama Choma", img: "images/nyama-choma.jpg", desc: "Grilled goat/beef." }
];

let container = document.querySelector(".recipe-grid");

recipes.forEach(r => {
  let card = document.createElement("article");
  card.className = "recipe-card";
  card.innerHTML = `
    <img src="${r.img}" alt="${r.name}">
    <h3>${r.name}</h3>
    <p>${r.desc}</p>
  `;
  container.appendChild(card);
});
