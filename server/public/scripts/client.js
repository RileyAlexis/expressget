console.log('script sourced.');

function getQuotes() {
    axios.get('/quotes').then((response) => {
        console.log('Success', response);
        let quotesFromServer = response.data;
        renderToDom(quotesFromServer);
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong');
    });
}



function renderToDom(quotes) {
    output.innerHTML = '';

    for (let quote of quotes) {
        output.innerHTML += `
        <p>"${quote.text} - ${quote.author}"</p>
        `
    }
}