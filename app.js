//1
const hideButton = document.querySelector(".btn");
hideButton.addEventListener("click", function removeButton() {
  hideButton.remove();
});

//2

const imgBody = document.querySelector("body");
const divBlock = document.createElement("div");
divBlock.setAttribute("class", "script-image");
divBlock.innerHTML = `
    <img src="https://flxt.tmsimg.com/assets/p8553063_b_h9_az.jpg" alt="img-pc"/>
        `;
imgBody.appendChild(divBlock);

//3
// const characters = [
//   {
//     first_name: "John",
//     last_name: "Snow",
//     house: "Stark",
//     image: "https://pyxis.nymag.com/v1/imgs/7ad/fa0/4eb41a9408fb016d6eed17b1ffd1c4d515-07-jon-snow.rsquare.w330.jpg",
//     actor: "Kit Harington",
//   },
//   {
//     first_name: "Aria",
//     last_name: "Stark",
//     house: "Stark",
//     image: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/310487165_656182915868699_6875362745569911357_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uX1H5PhWB1YAX8LgtrX&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfDW0KIKs6lyxlqv8WDPu4rfGqbS5Qz8E5P03rth77T3Mg&oe=6385AE2E",
//     actor: "Emma Watson",
//   },
//   {
//     first_name: "Sansa",
//     last_name: "Stark",
//     house: "Stark",
//     image: "https://s2.r29static.com/bin/entry/cc7/0,200,2000,2000/x/1804416/image.png",
//     actor: "Sophie Turner",
//   },
//   {
//     first_name: "Jaime",
//     last_name: "Lannister",
//     house: "Lanister",
//     image: "https://cdna.artstation.com/p/assets/images/images/029/449/818/large/subinoy-roy-jaime-final1.jpg?1597596885",
//     actor: "Nikolaj Coster-Waldau",
//   },
// ];

const characters = [
  {
    first_name: "Jon",
    last_name: "Snow",
    house: "Stark",
    image: "https://pyxis.nymag.com/v1/imgs/7ad/fa0/4eb41a9408fb016d6eed17b1ffd1c4d515-07-jon-snow.rsquare.w330.jpg",
    actor: "Kit Harington",
  },
  {
    first_name: "Aria",
    last_name: "Stark",
    house: "Stark",
    image: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/310487165_656182915868699_6875362745569911357_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uX1H5PhWB1YAX8LgtrX&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfDW0KIKs6lyxlqv8WDPu4rfGqbS5Qz8E5P03rth77T3Mg&oe=6385AE2E",
    actor: "Maisie Williams",
  },
  {
    first_name: "Sansa",
    last_name: "Stark",
    house: "Stark",
    image: "https://s2.r29static.com/bin/entry/cc7/0,200,2000,2000/x/1804416/image.png",
    actor: "Sophie Turner",
  },
  {
    first_name: "Jaime",
    last_name: "Lannister",
    house: "Lanister",
    image: "https://cdna.artstation.com/p/assets/images/images/029/449/818/large/subinoy-roy-jaime-final1.jpg?1597596885",
    actor: "Nikolaj Coster-Waldau",
  },
];
function imageImage(userArr) {
  const characterCard = userArr.map((el) => {
    return `<div class=character-card><p>${el.first_name}${el.last_name}</p><p>House: ${el.house}</p> <img src="${el.image}"></div>
    
        `;
  });
  return characterCard;
}
let charactersHTML = imageImage(characters).join("");
const charactersLi = document.getElementById("characters-list");
charactersLi.innerHTML = charactersHTML;