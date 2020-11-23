AOS.init();

const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const btn = document.getElementById("btn");
const twitter = document.getElementById("twitter");

let realData = "";
let quoteData = " ";

const twtNow = () =>{
    let twetNow = `https://twitter.com/intent/tweet?text=${quoteData.text} ${quoteData.author}`;
    window.open(twetNow);
}

const getNewQuotes = () =>{
    let ranNum = Math.floor(Math.random() * 200); 
    quoteData = realData[ranNum];
    quotes.innerHTML = `${quoteData.text}`;

    quoteData.author === null ? 
    (author.innerText = "Unknown"):
    (author.innerText = `${quoteData.author}`);
    quoteData
}
const getQutoes = async ()=>{
    const api = `https://type.fit/api/quotes`;
    try{
        let data = await fetch(api);
        realData = await data.json();
      
        getNewQuotes();
        
    }catch{}
}
twitter.addEventListener('click', twtNow);
btn.addEventListener('click',getNewQuotes);
getQutoes();