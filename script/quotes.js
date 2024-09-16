var btn = document.getElementById('btn');
btn.onclick = function () {
    var random = getQuotes();
    document.getElementById('quote').innerHTML = card[random];
};

var quotes = [
    { text: "“Be yourself; everyone else is already taken.” ", source: "Oscar Wilde" },
    { text: "“So many books, so little time.”", source: "Frank Zappa" },
    { text: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", source: "Albert Einstein" },
    { text: "“A room without books is like a body without a soul.”", source: "Marcus Tullius Cicero" },
    { text: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", source: "Bernard M. Baruch" },
    { text: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”", source: "Dr. Seuss" },
    { text: "“You only live once, but if you do it right, once is enough.”", source: "Mae West" },
    { text: "“Be the change that you wish to see in the world.”", source: "Mahatma Gandhi" },
    { text: "“In three words I can sum up everything I've learned about life: it goes on.”", source: "Robert Frost" },
    { text: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”", source: "J.K. Rowling" }


];

var card = [];
for (var i = 0; i < quotes.length; i++) {
    card.push(`<blockquote class="blockquote fs-2 py-3">
                   <p>${quotes[i].text}</p>
        </blockquote>
        <figcaption class="blockquote-footer text-center">
            <cite title="Source Title">${quotes[i].source}</cite>
        </figcaption>`);
}

var lastRandomNum = null;
function getQuotes() {
    var randomQuote = Math.floor(Math.random() * quotes.length);
    while (randomQuote == lastRandomNum) {
        randomQuote = Math.floor(Math.random() * quotes.length);
    }
    lastRandomNum = randomQuote;
    return randomQuote;
}
