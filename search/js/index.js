function Card(title, description, img) {
    this.title = title;
    this.description = description;
    this.img = img;
}

const cardsInfo = [];
cardsInfo.push(new Card('Avengers:Endgame', 'SUN 8SEPT - 10:00PM', 'img/avengers.jpg'))
cardsInfo.push(new Card('Hobbs & Shaw', 'TUE 4 JULY - 05:00PM', 'img/hobbs-shaw.jpg'))
cardsInfo.push(new Card('John Wick 3', 'WED 16 AUG - 07:00PM', 'img/John-Wick-3.jpg'))
cardsInfo.push(new Card('Deadpool 2', 'MON 16 OCT - 10:00PM', 'img/deadpool-2.jpg'))
cardsInfo.push(new Card('The Lion King', 'SUN 8 SEPT - 10:00PM', 'img/the-lion-king.jpg'))
cardsInfo.push(new Card('Mad Max:Fury Road', 'TUE 8 JULY - 05:00PM', 'img/mad-max.jpg'))
cardsInfo.push(new Card('Aquaman', 'WED 16 AUG - 07:00PM', 'img/aquaman.jpg'))
cardsInfo.push(new Card('Mission Impossible', 'MON 16 OCT - 10:00PM', 'img/mission-impossible.jpg'))


const cardView = (cardInfo) => {
    return `
<div  class="card col-3">
    <div>
        <img alt=${cardInfo.title} class="photo" src=${cardInfo.img}/>
    </div>
    <div>
        <h3 class="title">
            ${cardInfo.title}
        </h3>
        <h4 class="dec">
            ${cardInfo.description}
        </h4>
    </div>
</div>
`
}

const generateCards = (cardInfoList) => {
    return cardInfoList.map(cardInfo => {
        return cardView(cardInfo)
    }).join(' ');
}

const cardContainer = document.getElementById("cardContainer");
cardContainer.innerHTML = generateCards(cardsInfo)


function onSearch(element) {
    const searchTerm = element.value;
    const filteredCards = cardsInfo.filter(card => {
        return card.title.includes(searchTerm) || card.description.includes(searchTerm)
    })

    cardContainer.innerHTML = generateCards(filteredCards)
}