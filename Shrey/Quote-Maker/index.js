// initialising variables:

let realdata = "";
const quote = document.querySelector(".box");
const authors = document.querySelector(".authorname");
const butn = document.querySelector(".quotechanger");
const speaker = document.querySelector(".soundeffect");
const copying = document.querySelector(".copyeffect");
const tweetgenerator = document.querySelector(".twitter");
const imagechanger = ['images/bcg2.jpg','images/bgr3.webp','images/pic1.jpg','images/up1.jpg','images/up2.jpg','images/up3.png','images/up4.webp',
'images/up4.webp','images/up5.jpg','images/up6.jpg','images/up7.jpg','images/up8.jpg','images/up9.jpg','images/up11.webp','images/up14.webp','images/up16.jpg',
'images/up17.jpg','images/up18.jpg','images/up19.jpg','images/up20.jpg','images/up21.jpg','images/up22.jpg','images/up24.jpg',
'images/up26.jpg','images/up27.jpg','images/up28.jpg','images/up29.jpg','images/up245.jpg'];
// Manipulating data in website:

const newquotes = () => {
    const randompic = Math.floor(Math.random()*imagechanger.length);
    document.body.style.backgroundImage = "url("+imagechanger[randompic]+")";
    let randomvar = Math.floor(Math.random()*realdata.length);
    quote.innerText = `${realdata[randomvar].text}`;
    if (realdata[randomvar].author === null) {
        authors.innerText = "Unknown";
    }
    else {
        authors.innerText = `${realdata[randomvar].author}`;
    }
}


// FETCHING OF AN API:

const quotegenerator = async() => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realdata = await data.json();
        newquotes();
    } catch (error) {}
};

speaker.addEventListener("click", () => {
    let speakervalue = new SpeechSynthesisUtterance(`${quote.innerText} by ${authors.innerText}`);
    speechSynthesis.speak(speakervalue);
});

tweetgenerator.addEventListener("click", () => {
    let tweetconnector = `https://twitter.com/intent/tweet?url=${quote.innerText}`;
    window.open(tweetconnector, "_blank");
})

copying.addEventListener("click", () => {
    navigator.clipboard.writeText(quote.innerText);
})

butn.addEventListener("click", newquotes);

quotegenerator();
