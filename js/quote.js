const quoteBtn = document.getElementById('new-btn');
quoteBtn.addEventListener('click', () => newQuote())

const newQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}

const displayQuote = quote => {
    const container = document.getElementById('quote');
    container.innerText = quote.quote;
}
