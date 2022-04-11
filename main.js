

let availableQuotes = ['Arg, I\'ll take on any of yews like my step father use to take me.', 'My dream job was to be a professional lightning man', 'Nothing quite like wrastlin\' lubed up livestock...', 'Oi Will Smith is a bitch', 'I put the I in Ireland, you put the I in bitch!', 'Pags is Amazing' ]
let quote = document.querySelector('#quote');

function generateQuote() {
    for (let i = 0; i < availableQuotes.length; i++) {
        let i = Math.floor(Math.random() * availableQuotes.length)
        quote.textContent = "\"" + availableQuotes[i] + "\"" + " - Connor Mcgregor";
    }
}
