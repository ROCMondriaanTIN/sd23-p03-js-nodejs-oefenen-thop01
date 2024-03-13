console.log("js is loaded");

fetch("/cards")
    .then(response => response.json())
    .then(data => showCards(data));

function showCards(data) {
    const cards = data;
    const cardContainer = document.querySelector(".card-container");
    console.log(cardContainer);
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        cardContainer.innerHTML += `
            <div class="card">
                <h2> ${card.title} </h2>
                <p> ${card.description} </p>
                <img src="${card.img}">
            </div>
        `;
    }
}