// //fetch random quote from API 
const url = 'https://api.quotable.io/random';
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const button = document.querySelector('.butt');

//https://github.com/lukePeavey/quotable#usage
function randQuote () {
fetch(url)
  .then(response => response.json())
  .then(data => {
    quote.textContent = data.content;
    author.textContent = '- ' + data.author;
    // console.log(quote.textContent + '\n' + author.textContent);
  });
}

randQuote();    //So at each time we open this website we will get a new quote :)
button.addEventListener('click', randQuote);
console.log('- Made by Gaurav Sharma');
