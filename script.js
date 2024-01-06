const quotes = [ 
"Things are never quite as scary when you've got a best friend.",
"Friendship is the hardest thing in the world to explain. It's not something you learn in school. But if you haven't learned the meaning of friendship, you really haven't learned anything.",
"My best friend is the one who brings out the best in me.",
"Friendship is the only cement that will ever hold the world together.",
"A day without a friend is like a pot without a single drop of honey left inside.",
"True friends are never apart, maybe in distance but never in heart.",
"The best mirror is an old friend.",
"Remember that life's most valuable antiques are dear old friends.",
"Life is an ugly, awful place to not have a best friend.",
"Growing apart doesn't change the fact that for a long time we grew side by side; our roots will always be tangled."
];

// What i tried alone 

// function newQuote() {
//     let rndmNum = Math.floor(Math.random() * (quotes.length));
//     let quote_tag = `<p>${quotes[rndmNum]}</p>`;
//     let quote_position = document.querySelector('#quoteDisplay');
//     read_quote_tag = quote_position.insertAdjacentHTML('beforeend', quote_tag)
// }

function newQuote() {
    let rndmNum = Math.floor(Math.random() * (quotes.length));
    display_quote = document.getElementById('quoteDisplay').innerHTML = quotes[rndmNum];
}